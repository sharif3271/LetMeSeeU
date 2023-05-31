import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAuthUser, ILoginBody, IRegisterBody } from "src/interfaces";
import { UserRepository } from "src/repository";
import { JwtService } from '@nestjs/jwt';
import { ErrorMessages, PassUtils, Successful } from "src/utils";
import { User } from "@prisma/client";
import { BufferedFile, MinioClientService } from "src/modules/minio-client";

@Injectable()
export class UsersService {
  constructor(
    private repository: UserRepository,
    private jwtService: JwtService,
    private storage: MinioClientService
  ) { }

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
      return new Successful({ data: this.generateToken({ id: user.id, name: user.name, }) })
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
  async profile(userId: string) {
    const user = await this.repository.user.findUnique({ where: { id: userId } });
    if (user) {
      return new Successful({
        data: {
          avatar: user.avatar,
          name: user.name,
          id: user.id
        } as Omit<User, 'password'>
      }).toJson();
    } else {
      throw new HttpException(ErrorMessages.user.GET_PROFILE_FAILD, HttpStatus.FORBIDDEN);
    }
  }
  async uploadAvatar(img: BufferedFile, userId: string) {
    const uploadObjInfo = await this.storage.uploadAvatar(img);
    try {
      await this.repository.user.update({
        where: {
          id: userId
        },
        data: {
          avatar: uploadObjInfo.fileName
        }
      });
      return new Successful({ data: uploadObjInfo.fileName }).toJson();
    } catch (error) {
      throw new HttpException(error?.message || 'Unable to save avatar', HttpStatus.BAD_REQUEST);
    }
  }
  async searchInUsers(query: string, userId: string) {
    if (query?.length > 1) {
      const users = await this.repository.user.findMany({
        where: {
          name: {
            startsWith: query
          },
          AND: {
            id: {
              not: userId
            },
            followers: {
              none: {
                requestedById: {
                  equals: userId
                }
              }
            },
            followings: {
              none: {
                requestedToId: {
                  equals: userId
                }
              }
            }
          }
        },
        select: {
          id: true,
          name: true,
          avatar: true,
        }
      });
      return new Successful({ data: users as User[]});
    } else {
      return new Successful({ data: [] as User[]});
    }
  }
}