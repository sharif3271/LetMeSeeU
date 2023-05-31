import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IAuthUser, ILoginBody, IRegisterBody } from "src/interfaces";
import { ConnectionRepository } from "src/repository";
import { JwtService } from '@nestjs/jwt';
import { ErrorMessages, Successful } from "src/utils";
import { User } from "@prisma/client";

@Injectable()
export class ConnectionService {
  constructor(
    private repository: ConnectionRepository,
  ) { }

}