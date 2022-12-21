import { HttpException, HttpStatus } from '@nestjs/common';

export class CEPNotValidException extends HttpException {
  constructor() {
    super('The CEP provided is invalid', HttpStatus.BAD_REQUEST);
  }
}
