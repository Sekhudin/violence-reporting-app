import { ForToast } from 'src/component/ui/use-toast';

export namespace Exception {
  export interface HttpException { code: number; message: string; description: string };
  type Exception = "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "INTERNAL_SERVER_ERROR";
  export type HttpCode = Record<Exception, Omit<HttpException, 'description'>>;

  export type Catch = {
    forToast: ForToast;
    errorDetail: HttpException;
  }
}