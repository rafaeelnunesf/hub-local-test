import { Request } from 'express';
import { User } from 'src/api/user/user.entity';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';

export interface EmpresaRequest extends Request {
  user: User;
  body: CreateEmpresaDto;
}
