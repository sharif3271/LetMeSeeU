import { IUser } from './side-effects';

export enum AppLoadings {
  profileLoading = 'profileLoading',
  connectionLoading = 'connectionLoading'
}
export type TAppLoadings = { [key in AppLoadings]?: boolean; };

export interface IMainStore extends TAppLoadings {
  profile: IUser | null;
}