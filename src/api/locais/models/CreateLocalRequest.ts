import { Request } from 'express';
import { Empresa } from 'src/api/empresas/empresa.entity';
import { CreateLocalDto } from '../dto/create-local.dto';

export interface CreateLocalRequest extends Request {
  empresa: Empresa;
  body: CreateLocalDto;
}
