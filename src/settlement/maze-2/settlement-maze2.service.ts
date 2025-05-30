import { Injectable } from "@nestjs/common";
import { IsettlementHandler } from "../interface/settlement-handler.interface";
import { PrismaService } from "src/prisma/prisma.service";



@Injectable()
export class SettlementMaze2Service implements IsettlementHandler{
  constructor(private readonly prisma: PrismaService){}
  
  getGameName(): string {
      return 'maze_2';
  }

  async settle(round_id: string): Promise<void>{

    console.log(round_id,'settlement maze 2 ');


  // Query bets for this game and round id
  const bets = await this.prisma.bettingRound.findMany({
    where: {
      round_id: round_id,
      game_name: 'maze_2', // make sure to filter by game name as well
    },
  });

  for (const bet of bets) {
    // Run game-specific settlement logic here...
    // e.g., decide win/loss, update bet status, user balance, etc.
    // await this.prisma.bettingRound.update({ ... });
  }

//Get All Bets in prisma 
    
//   model BettingRound{
//   id Int @id @default(autoincrement())
//   user_id Int
//   game_name String
//   betting_amount Int @default(0)
//   winning_amount Int @default(0)
//   betting_status Int @default(0) // 0: pending, 1: win, 2: lose, 3: draw  
//   round_id String
//   bet_type Int @default(0)
//   user    User @relation(fields: [user_id], references: [id])

// }


  }

} 