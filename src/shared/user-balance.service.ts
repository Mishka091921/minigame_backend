// src/shared/user-balance.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserBalanceService {
  constructor(private prisma: PrismaService) {}

  async getBalance(userId: number): Promise<number> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    return user?.money ?? 0;
  }

  // async deductmoney(userId: number, amount: number): Promise<void> {
  //   await this.prisma.user.update({
  //     where: { id: userId },
  //     data: {
  //       money: {
  //         decrement: amount,
  //       },
  //     },
  //   });
  // }

   async incrementMoney(userId: number, amount: number): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        money: {
          increment: amount,
        },
      },
    });
  }
}
