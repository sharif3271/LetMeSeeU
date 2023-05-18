import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAuthUser, ILoginBody, IRegisterBody } from "src/interfaces";
import { UserRepository } from "src/repository";
import { JwtService } from '@nestjs/jwt';
import { ErrorMessages, IResponse, PassUtils, Successful } from "src/utils";
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private repository: UserRepository, private jwtService: JwtService) { }

  private generateToken(user: IAuthUser) {
    return this.jwtService.sign(user);
  }
  async login(body: ILoginBody) {
    if (!body.name || !body.password) {
      throw new HttpException(
        ErrorMessages.user.REGISTER_BAD_REQUEST,
        HttpStatus.BAD_REQUEST
      );
    }
    const user = await this.repository.user.findUnique({ where: { name: body.name } });
    if (user && PassUtils.verify(user.password, body.password)) {
      return new Successful({ data: this.generateToken({ id: user.id, name: user.name, })})
    } else {
      throw new HttpException(ErrorMessages.user.LOGIN_INVALID, HttpStatus.FORBIDDEN);
    }
  }
  async register(body: IRegisterBody) {
    if (!body.name || !body.password) {
      throw new HttpException(
        ErrorMessages.user.REGISTER_BAD_REQUEST,
        HttpStatus.BAD_REQUEST
      );
    }
    return await this.repository.user.create({
      data: {
        name: body.name,
        password: await PassUtils.makeHash(body.password),
      }
    })
      .then(u => {
        return new Successful<User>({ data: { ...u, password: undefined } }).toJson();
      })
      .catch(() => {
        throw new HttpException(ErrorMessages.user.ALREADY_EXISTS, HttpStatus.FORBIDDEN);
      })
  }
}