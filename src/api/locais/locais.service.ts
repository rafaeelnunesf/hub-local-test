import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { CEPNotValidException } from './exceptions/notvalidcep.exception';
import { Local } from './local.entity';

@Injectable()
export class LocaisService {
  @InjectRepository(Local)
  private readonly repository: Repository<Local>;

  constructor(private readonly axios: HttpService) {}

  async create(local: CreateLocalDto) {
    const url = `https://viacep.com.br/ws/${local.cep}/json/`;

    try {
      const result = this.axios.get(url).pipe(
        map((response) => {
          return response.data;
        }),
      );

      return result;
    } catch (error) {
      console.log(error);
      if (error) throw new CEPNotValidException();
    }
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
