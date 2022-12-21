import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { EmpresasModule } from './empresas/empresas.module';
import { LocaisModule } from './locais/locais.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    EmpresasModule,
    LocaisModule,
    RouterModule.register([
      {
        path: 'empresas',
        module: EmpresasModule,
        children: [
          {
            path: ':empresaId/locais',
            module: LocaisModule,
          },
        ],
      },
    ]),
  ],
  exports: [UserModule, EmpresasModule, LocaisModule],
})
export class ApiModule {}
