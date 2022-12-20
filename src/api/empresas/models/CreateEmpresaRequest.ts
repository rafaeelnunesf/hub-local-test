import { Request } from 'express';
import { User } from 'src/api/user/user.entity';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';

export interface CreateEmpresaRequest extends Request {
  user: User;
  body: CreateEmpresaDto;
}
