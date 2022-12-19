import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { cnpjRegEx } from 'src/common/validators/cnpj.validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsOptional()
  @IsString()
  description: string;
}
