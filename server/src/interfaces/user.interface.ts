import { User } from '@prisma/client';
import { Request } from 'express';


export type IAuthUser = Pick<User, 'id' | 'name'>;

export interface ILoginBody {
  name: string;
  password: string;
}
export interface IRegisterBody {
  name: string;
  password: string;
}
export interface IProtectedReq extends Request {
  user: IAuthUser;
}