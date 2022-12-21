import { HttpException, HttpStatus } from '@nestjs/common';

export class EmpresaNotFoundException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    super(
      message || 'This empresa was not found!!',
      status || HttpStatus.NOT_FOUND,
    );
  }
}
