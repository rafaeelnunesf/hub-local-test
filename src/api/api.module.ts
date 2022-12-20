import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { EmpresasModule } from './empresas/empresas.module';
import { LocaisModule } from './locais/locais.module';

@Module({
  imports: [UserModule, EmpresasModule, LocaisModule],
  exports: [UserModule, EmpresasModule, LocaisModule],
})
export class ApiModule {}
