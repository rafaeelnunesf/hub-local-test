import { CreateEmpresaDto } from '../dto/create-empresa.dto';

export interface EmpresaData extends CreateEmpresaDto {
  userId: number;
}
