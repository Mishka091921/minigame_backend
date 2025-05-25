import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChargingDTO } from './DTO/create-charging.dto';

@Injectable()
export class ChargingService {
  constructor(private prisma: PrismaService){}

  async createCharging(createChargeDto: CreateChargingDTO, user_id: number,before_money: number){

    return await this.prisma.chargeHistory.create({
      data: {
        user_id,
        amount: createChargeDto.amount,
        before_money,
        status: 0,
      },
    });
  }

  async checkPendingRquest(user_id:number){
    return await this.prisma.chargeHistory.findMany({
      where: {
        user_id: user_id,
        status: 0,
      },
    })

  }
  
}
