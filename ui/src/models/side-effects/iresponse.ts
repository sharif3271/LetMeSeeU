export * from './iuser';


export interface IResponse<T = unknown> {
  success: boolean;
  message: string;
  status: number;
  data: T;
  currentPage?: number;
  totalPages?: number;
}