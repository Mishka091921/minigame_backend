// src/shared/shared.module.ts
import { Module, Global } from '@nestjs/common';
import { UserBalanceService } from './user-balance.service';
import { PrismaModule } from '../prisma/prisma.module';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [UserBalanceService],
  exports: [UserBalanceService], // 👈 so other modules can use it
})
export class SharedModule {}
