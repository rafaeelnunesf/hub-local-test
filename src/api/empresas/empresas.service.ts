import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './empresa.entity';
import { EmpresaAlreadyExistsException } from './exceptions/EmpresaAlreadyExists.exception';
import { EmpresaNotFoundException } from './exceptions/EmpresaNotFound.exception';
import { EmpresaData } from './models/EmpresaData.model';

@Injectable()
export class EmpresasService {
  @InjectRepository(Empresa)
  private readonly repository: Repository<Empresa>;

  async create(empresa: EmpresaData): Promise<Empresa> {
    const existingEmpresa = await this.repository.find({
      where: { cnpj: empresa.cnpj },
    });

    if (existingEmpresa.length !== 0) throw new EmpresaAlreadyExistsException();
    await this.repository.save(empresa);

    const createdEmpresa = await this.repository.save(empresa);
    return { ...createdEmpresa };
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const empresa = await this.repository.findOneBy({ id });
    if (!empresa) throw new EmpresaNotFoundException();

    return empresa;
  }

  async update(id: number, empresa: UpdateEmpresaDto) {
    const existingEmpresa = await this.repository.findOneBy({ id });
    if (!existingEmpresa) throw new EmpresaNotFoundException();

    return this.repository.save({
      ...existingEmpresa,
      ...empresa,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
