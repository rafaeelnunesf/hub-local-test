import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateLocalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/[0-9]{5}-?[0-9]{3}/)
  cep: string;

  @IsString()
  @IsOptional()
  logradouro: string;

  @IsString()
  @IsOptional()
  complemento: string;

  @IsString()
  @IsOptional()
  bairro: string;

  @IsString()
  @IsOptional()
  localidade: string;

  @IsString()
  @IsOptional()
  uf: string;
}
