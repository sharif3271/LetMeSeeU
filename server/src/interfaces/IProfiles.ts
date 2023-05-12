import {users} from 'prisma/client/user';
import {companies} from 'prisma/client/user';

export {users as IUser} from 'prisma/client/user';
export {companies as ICompany} from 'prisma/client/user';

export enum UserType {
    USER = 'USER',
    COMPANY = 'COMPANY'
}
export interface IProfileReq {
    userType: UserType;
    accessToken: string;
}
export interface IAuthUser {
    type: UserType;
    data: users | companies;
}