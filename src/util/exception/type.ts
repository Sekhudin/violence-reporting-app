import { ForToast } from 'src/component/ui/use-toast';

export namespace Exception {
  export interface HttpMessage { code: number; message: string; };
  type Exception = "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "CONFLICT" | "INTERNAL_SERVER_ERROR";
  export type HttpCode = Record<Exception, HttpMessage>;

  export type Catch = {
    forToast: ForToast
  }
}