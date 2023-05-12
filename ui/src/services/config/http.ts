import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export class HttpClient {
  private readonly http: AxiosInstance;
  private baseUrl = process.env.BASE_URL;

  public getAxiosInstance() {
    return this.http;
  }
  public constructor(timeout?: number) {
    const token = localStorage.getItem('token');
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
  public get(url: string, config: AxiosRequestConfig = {}) {
    return this.http.get(url, config);
  }
  public post(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return this.http.post(url, data, config);
  }
}
