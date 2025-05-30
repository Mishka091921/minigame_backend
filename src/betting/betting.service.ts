import { Injectable } from '@nestjs/common';
import { BettingDTO } from './DTO/create-betting.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MongoResult, MongoResultDocument } from 'schema/mongo-result.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BettingService {
constructor(
  private prisma: PrismaService
) {}

  // async checkUserBet(){
  //   const results = await this.mongoResultModel.find().lean();
  //   console.log(results);
  //   return results;
  // }
  async placeBet(bettingDto: BettingDTO, user_id){

    const { amount : betting_amount, round_id, game_name, bet_type } = bettingDto;

    try{
      const bettingRound = await this.prisma.bettingRound.create({
        data: {
          user_id,
          betting_amount,
          round_id,
          game_name,
          bet_type
        },
      });

     return bettingRound;

  
    }catch(err){
      console.log(err);
    }
 

  };
  

}
