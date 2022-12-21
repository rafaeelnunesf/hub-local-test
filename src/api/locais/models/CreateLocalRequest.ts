import { Request } from 'express';
import { Empresa } from 'src/api/empresas/empresa.entity';
import { CreateLocalDto } from '../dto/create-local.dto';

export interface LocalRequest extends Request {
  empresa: Empresa;
  body: CreateLocalDto;
}
