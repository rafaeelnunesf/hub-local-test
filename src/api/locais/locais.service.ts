import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { LocalNotFoundException } from './exceptions/localnotfound.exception';
import { CEPNotValidException } from './exceptions/notvalidcep.exception';
import { Local } from './local.entity';

@Injectable()
export class LocaisService {
  @InjectRepository(Local)
  private readonly repository: Repository<Local>;
  constructor(private readonly http: HttpService) {}

  async create(local: CreateLocalDto) {
    const validatedData = await this.validateCep(+local.cep);

    const data = { ...local, ...validatedData };

    const savedData = await this.repository.save(data);

    return savedData;
  }

  async findAll(empresaId: number) {
    return await this.repository.find({ where: { empresaId } });
  }

  async findOne(id: number, empresaId: number) {
    return await this.repository.find({ where: { id, empresaId } });
  }

  async update(id: number, empresaId: number, local: UpdateLocalDto) {
    const existingLocal = await this.repository.findOneBy({ id, empresaId });
    if (!existingLocal) throw new LocalNotFoundException();

    return this.repository.save({
      ...existingLocal,
      ...local,
    });
  }

  async remove(id: number, empresaId: number) {
    const local = await this.repository.findOneBy({ id, empresaId });
    if (!local) throw new LocalNotFoundException();

    await this.repository.remove(local);
  }
  async validateCep(cep: number) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const request = this.http
      .get(url)
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new CEPNotValidException();
        }),
      );

    const result = await lastValueFrom(request);
    if (result.erro) throw new CEPNotValidException();

    result.ibge = undefined;
    result.gia = undefined;
    result.ddd = undefined;
    result.siafi = undefined;

    result.cep = result.cep.replace('-', '');

    return result;
  }
}
