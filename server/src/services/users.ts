import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAuthUser, ICompany, IUser, UserType } from "src/interfaces";
import { UserRepository } from "src/repository";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(private userRepo: UserRepository, private jwtService: JwtService) {}

    private generateAuthToken(type: UserType, data: IUser | ICompany) {
        return {
            chatToken: this.jwtService.sign({
                type,
                data
            } as IAuthUser)
        };
    }
    async getUserProfile(token: string, userType: UserType) {
        if (!token) {
            throw new HttpException('User Authentication Faild', HttpStatus.UNAUTHORIZED);
        }
        if (userType === UserType.USER) {
            const user = await this.userRepo.users.findFirst({
                where: {express_token: token},
            });
            if (user) {
                return this.generateAuthToken(UserType.USER, user);
            } else {
                throw new HttpException('Client Not Fount', HttpStatus.NOT_FOUND);
            }
        } else if (userType === UserType.COMPANY) {
            const company = await this.userRepo.companies.findFirst({
                where: {express_token: token},
            });
            if (company) {
                return this.generateAuthToken(UserType.COMPANY, company);
            } else {
                throw new HttpException('Client Not Fount', HttpStatus.NOT_FOUND);
            }
        } else {
            throw new HttpException('User Type Undefined', HttpStatus.BAD_REQUEST);
        }
    }
}