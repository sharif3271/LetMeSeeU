import { User } from '@prisma/client';


export type IAuthUser = Pick<User, 'id' | 'name'>;

export interface ILoginBody {
  name: string;
  password: string;
}
export interface IRegisterBody {
  name: string;
  password: string;
}