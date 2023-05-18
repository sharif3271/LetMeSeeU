import { HttpStatus } from "@nestjs/common";


export interface IResponse<T = unknown> {
  success?: boolean;
  message?: string;
  status?: HttpStatus;
  data?: T;
  currentPage?: number;
  totalPages?: number;
}
export interface ISuccess<T> extends Pick<IResponse<T>, "success" | "message" | "status" | "data"> { }


abstract class ResponseBase<T = unknown> {
  success: boolean = true;
  message: string = '';
  status: HttpStatus = HttpStatus.OK;
  data: T | null = null;
  currentPage: number = 0;
  totalPages: number = 0;
  constructor({ ...args }: IResponse<T>) {
    const { currentPage, data, message, status, success, totalPages } = args;
    if (success) this.success = success;
    if (message) this.message = message;
    if (status) this.status = status;
    if (data) this.data = data;
    if (currentPage) this.currentPage = currentPage;
    if (totalPages) this.totalPages = totalPages;
  }
  abstract toJson(): IResponse<T>;
}

export class Successful<T = unknown> extends ResponseBase<T> {
  constructor({ ...args }: ISuccess<T>) { super(args) }
  toJson(): IResponse<T> {
    return {
      data: this.data,
      success: this.success,
      message: this.message,
      status: this.status,
    } as ISuccess<T>;
  }
}