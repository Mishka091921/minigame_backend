import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MongoResult, MongoResultDocument } from 'schema/mongo-result.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProcessResultService {
constructor(
  @InjectModel(MongoResult.name, 'minigame_result_connection')
  private mongoResultModel: Model<MongoResultDocument>,
  private prisma: PrismaService
) {}

async checkUserBet(round_id: string) {

  try{
    const results = await this.mongoResultModel.find({ round_id }).lean();
    console.log(results);
    return results;

  }catch(err){
    console.log(err);

  }

}

  

}
