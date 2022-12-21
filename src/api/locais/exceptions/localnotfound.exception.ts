import { HttpException, HttpStatus } from '@nestjs/common';

export class LocalNotFoundException extends HttpException {
  constructor() {
    super('Local not found!', HttpStatus.NOT_FOUND);
  }
}
