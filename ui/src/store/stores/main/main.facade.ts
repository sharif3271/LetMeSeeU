import * as actions from './action';
import { AppLoadings } from 'src/models';
import { MainServices } from 'src/services';
import { store as AppStore } from 'store/reducers';

export class MainFacade {
  constructor(
    private store = AppStore,
    private dispatch = AppStore.dispatch,
    private service = new MainServices()
  ) { }

  toggleLoading(loaingType: AppLoadings) {
    this.dispatch(actions.toggleLoading(loaingType));
  }

  initiateHome() {
    this.getProfile();
  }

  // side-effects
  getProfile() {
    this.toggleLoading(AppLoadings.profileLoading);
    this.service.profile()
      .then(({data}) => {
        if (data.success) {
          this.dispatch(actions.updateProfile(data.data));
        }
      })
      .finally(() => this.toggleLoading(AppLoadings.profileLoading));
  }
  setProfileAvatar(file: File) {}
}