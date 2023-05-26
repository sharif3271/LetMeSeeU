import { IUser } from './side-effects';

export enum AppLoadings {
  profileLoading = 'profileLoading',
  connectionLoading = 'connectionLoading',
  avatarUploading = 'avatarUploading'
}
export type TAppLoadings = { [key in AppLoadings]?: boolean; };

export interface IMainStore extends TAppLoadings {
  profile: IUser | null;
}