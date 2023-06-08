import { IResponse, IUser } from 'appRoot/src/models/side-effects/iresponse';
import { HttpClient } from 'src/services/config/http';
import { MAIN_URLS } from 'src/services/config/url';

export class MainServices {

  private http: HttpClient;
  private getAllAbort: AbortController | undefined;

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
  async setAvatar(image: File) {
    const form = new FormData();
    form.append('image', image);
    return this.http.post<IResponse<string>>(MAIN_URLS.setAvatar, form);
  }
  async getAll(query: string) {
    if (this.getAllAbort) {
      this.getAllAbort.abort();
      this.getAllAbort = undefined;
    }
    this.getAllAbort = new AbortController();
    return this.http.get<IResponse<IUser[]>>(`${MAIN_URLS.allUsers}?query=${query}`, {
      signal: this.getAllAbort?.signal
    });
  }
}