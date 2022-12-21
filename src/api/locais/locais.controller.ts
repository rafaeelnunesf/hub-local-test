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
import { LocaisService } from './locais.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { LocalRequest } from './models/CreateLocalRequest';

@Controller()
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @Post()
  create(
    @Body() body: CreateLocalDto,
    @Param('empresaId') empresaId: string,
    @Request() req: LocalRequest,
  ) {
    const data = { ...req.body, empresaId };
    return this.locaisService.create(data);
  }

  @Get()
  findAll(@Request() req: LocalRequest, @Param('empresaId') empresaId: string) {
    return this.locaisService.findAll(+empresaId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('empresaId') empresaId: string) {
    return this.locaisService.findOne(+id, +empresaId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('empresaId') empresaId: string,
    @Body() body: UpdateLocalDto,
  ) {
    return this.locaisService.update(+id, +empresaId, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('empresaId') empresaId: string) {
    return this.locaisService.remove(+id, +empresaId);
  }
}
