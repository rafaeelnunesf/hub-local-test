import { Module } from '@nestjs/common';
import { LocaisService } from './locais.service';
import { LocaisController } from './locais.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Local } from './local.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Local]),
    HttpModule.register({ headers: { Accept: 'application/json' } }),
  ],
  controllers: [LocaisController],
  providers: [LocaisService],
  exports: [LocaisService],
})
export class LocaisModule {}
