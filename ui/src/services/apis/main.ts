import { IResponse, IUser } from 'appRoot/src/models/side-effects/iresponse';
import { HttpClient } from 'src/services/config/http';
import { MAIN_URLS } from 'src/services/config/url';

export class MainServices {

  private http: HttpClient;
  public constructor() {
    this.http = new HttpClient();
  }
  async login(name: string, password: string) {
    return this.http.post<IResponse<string>>(MAIN_URLS.login, {
      name,
      password
    });
  }
  async register(name: string, password: string) {
    return this.http.post<IResponse<IUser>>(MAIN_URLS.register, {
      name,
      password
    });
  }
  async profile() {
    return this.http.get<IResponse<IUser>>(MAIN_URLS.profile);
  }
}