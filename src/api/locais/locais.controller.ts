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
import { CreateLocalRequest } from './models/CreateLocalRequest';

@Controller('locais')
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}

  @Post()
  create(
    @Body() body: CreateLocalDto,
    @Param(':empresaId') empresaId,
    @Request() req: CreateLocalRequest,
  ) {
    const data = { ...req.body, empresaId };

    return this.locaisService.create(data);
  }

  @Get()
  findAll() {
    return this.locaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locaisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocaiDto: UpdateLocalDto) {
    return this.locaisService.update(+id, updateLocaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisService.remove(+id);
  }
}
