import { Body, Controller, Post, Req } from '@nestjs/common';
import { ProcessResultService } from './process_result.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('process-result')
export class ProcessResultController {


  constructor(
    private prisma: PrismaService,
    private processResultService: ProcessResultService
  
  ){}

@Post()
async updateBetting(@Body('round_id') round_id: string) {
  const res = await this.processResultService.checkUserBet(round_id);

  let winning_ball;
  if (res && res.length > 0 && res[0].result === 'Ball 2 | Ball 1') {
    winning_ball = 2;
  } else {
    winning_ball = 1;
  }

  if(res){
      const bettingRecords = await this.prisma.bettingRound.findMany({
        where: {
          round_id: res[0].round_id,
        },
      });

       // Loop through each betting record and update accordingly
      for (const record of bettingRecords) {
        if (record.bet_type == winning_ball && record.betting_status == 0) {
          await this.prisma.bettingRound.update({
            where: { id: record.id },
            data: {
              betting_status: 2,
              winning_amount: record.betting_amount * 1.9,
            },
          });
        } else {
          await this.prisma.bettingRound.update({
            where: { id: record.id },
            data: {
              betting_status: 1,
            },
          });
        }
      }

      return bettingRecords;

  }
  return res; // Return the result to the client
}



}
