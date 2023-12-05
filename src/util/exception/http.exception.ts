import { Exception } from './type';

const HttpCode: Exception.HttpCode = {
  BAD_REQUEST: { code: 400, message: "bad request" },
  UNAUTHORIZED: { code: 401, message: "unauthorized", },
  FORBIDDEN: { code: 403, message: "forbiden" },
  NOT_FOUND: { code: 404, message: "not found" },
  CONFLICT: { code: 409, message: "conflict" },
  INTERNAL_SERVER_ERROR: { code: 500, message: "internal server error" }
}

export class HttpException implements Exception.HttpMessage {
  readonly code!:number;
  readonly message!:string;
  readonly description!: string;
  constructor(value:HttpException){
    Object.assign(this, value)
  }
}

export class BadRequestException extends HttpException {
  constructor(description:string = 'Authentication required'){
    super({ ...HttpCode.BAD_REQUEST, description })
  }
}

export class UnAuthorizedException extends HttpException {
  constructor(description:string = 'Authentication required'){
    super({ ...HttpCode.UNAUTHORIZED, description })
  }
}

export class ForbiddenException extends HttpException {
  constructor(description:string = 'You do not have permission to access this resource'){
    super({ ...HttpCode.FORBIDDEN, description })
  }
}

export class NotFoundException extends HttpException {
  constructor(description:string = 'The requested resource could not be found'){
    super({ ...HttpCode.NOT_FOUND, description })
  }
}

export class ConflictException extends HttpException {
  constructor(description:string = 'Please resolve the conflict and try again or contact support for assistance'){
    super({ ...HttpCode.CONFLICT, description })
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(description:string = 'Please try again later or contact support if the problem persists'){
    super({ ...HttpCode.INTERNAL_SERVER_ERROR, description })
  }
}