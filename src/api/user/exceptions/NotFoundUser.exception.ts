import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundUserException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(message || 'User does not exists', status || HttpStatus.NOT_FOUND);
  }
}
