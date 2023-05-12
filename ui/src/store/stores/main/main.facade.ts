// import * as actions from './action';
import { MainServices } from 'src/services';
import {  store as AppStore } from 'store/reducers';

export class MainFacade {
    constructor(
        private store    = AppStore,
        private dispatch = AppStore.dispatch,
        private service  = new MainServices()
    ) {}
}