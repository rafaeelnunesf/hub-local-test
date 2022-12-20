import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';

@Injectable()
export class LocaisService {
  create(local: CreateLocalDto) {
    return 'This action adds a new locai';
  }

  findAll() {
    return `This action returns all locais`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locai`;
  }

  update(id: number, local: UpdateLocalDto) {
    return `This action updates a #${id} locai`;
  }

  remove(id: number) {
    return `This action removes a #${id} locai`;
  }
}
