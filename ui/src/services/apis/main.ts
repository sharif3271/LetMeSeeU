import { HttpClient } from 'src/services/config/http';
import { MAIN_URLS } from 'src/services/config/url';

export class MainServices {

    private http: HttpClient;

    public constructor() {
        this.http = new HttpClient();
    }
    async getTest(): Promise<any> {
        return this.http.get(MAIN_URLS.test);
    }
}