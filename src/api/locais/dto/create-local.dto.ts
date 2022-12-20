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
  @IsNotEmpty()
  logradouro: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  complemento: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  localidade: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  uf: string;
}
