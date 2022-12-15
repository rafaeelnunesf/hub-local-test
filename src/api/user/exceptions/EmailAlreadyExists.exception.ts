import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistsException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(message || 'Email already exists', status || HttpStatus.CONFLICT);
  }
}
