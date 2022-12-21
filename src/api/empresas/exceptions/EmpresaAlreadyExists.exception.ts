import { HttpException, HttpStatus } from '@nestjs/common';

export class EmpresaAlreadyExistsException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(
      message || 'This empresa is already registered!',
      status || HttpStatus.CONFLICT,
    );
  }
}
