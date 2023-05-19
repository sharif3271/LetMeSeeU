import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { TOKEN_KEY } from 'src/models/consts';

export class HttpClient {
  private readonly http: AxiosInstance;
  private baseUrl = process.env.BASE_URL;

  public getAxiosInstance() {
    return this.http;
  }
  public constructor(timeout?: number) {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    };
    if (token) {
      headers['Authorization'] = token;
    }
    this.http = axios.create({
      baseURL: this.baseUrl,
      timeout: timeout ? timeout : 130000,
      headers,
    });
  }
  public get<T = unknown>(url: string, config: AxiosRequestConfig = {}) {
    return this.http.get<T>(url, config);
  }
  public post<T = unknown>(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return this.http.post<T>(url, data, config);
  }
}
