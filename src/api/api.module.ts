import { Module } from '@nestjs/common';
import { EmpresasModule } from './empresas/empresas.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, EmpresasModule],
  exports: [UserModule, EmpresasModule],
})
export class ApiModule {}
