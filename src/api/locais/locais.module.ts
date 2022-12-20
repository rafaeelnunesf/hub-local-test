import { Module } from '@nestjs/common';
import { LocaisService } from './locais.service';
import { LocaisController } from './locais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './local.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Local])],
  controllers: [LocaisController],
  providers: [LocaisService],
  exports: [LocaisService],
})
export class LocaisModule {}
