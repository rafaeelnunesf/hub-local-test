import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { CreateEmpresaRequest } from './models/CreateEmpresaRequest';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Controller()
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  create(@Body() body: CreateEmpresaDto, @Request() req: CreateEmpresaRequest) {
    const data = { ...req.body, userId: req.user.id };
    return this.empresasService.create(data);
  }

  @Get()
  findAll(@Request() req: CreateEmpresaRequest) {
    return this.empresasService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateEmpresaDto) {
    return this.empresasService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresasService.remove(+id);
  }
}
