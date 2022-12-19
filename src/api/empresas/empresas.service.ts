import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './empresa.entity';
import { EmpresaAlreadyExistsException } from './exceptions/EmpresaAlreadyExists.exception';
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

  findAll() {
    return `This action returns all empresas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }
}
