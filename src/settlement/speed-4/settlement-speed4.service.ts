import { Injectable, Logger } from "@nestjs/common";
import { IsettlementHandler } from "../interface/settlement-handler.interface";
import { PrismaService } from "src/prisma/prisma.service";
import GameOdds from '../../../game_odds/game_odds.json'
import { UserBalanceService } from "src/shared/user-balance.service";
import { AppLogger } from "src/common/logger/logger.service";

@Injectable()
export class SettlementSpeed4Service implements IsettlementHandler{
  constructor(
    
    private readonly prisma: PrismaService,
    private readonly userBalanceService: UserBalanceService,
    // private readonly logger: AppLogger,
  ){}
  
  getGameName(): string {
      return 'speed_4';
  }

  async settle(round_id: string, data: any): Promise<void>{
    //Initialize the game odds for speed_4

    console.log(data,'speed 4');
    const game_odds = GameOdds.game_odds['speed_4'];

    // Extract the first part of the result
    const resultParts = data.result.split(' | ');
    const firstBall = resultParts[0].trim().toLowerCase();
  
    // Format to match desired variable name
    const ball_winner = firstBall.replace(' ', '_');

    console.log(ball_winner, 'ball winner for speed 4');
  
    // Extract the number from ball_winner
    const ballNumber = parseInt(firstBall.split(' ')[1], 10);
  
    // Determine if it's odd or even
    const isEven = ballNumber % 2 === 0;
    const parity = isEven ? 'even' : 'odd';
    const game_winner_odds = game_odds[ball_winner] || 0; // Default to 0 if not found

  // Query bets for this game and round id
  const bets = await this.prisma.bettingRound.findMany({
    where: {
      betting_status:0,
      round_id: round_id,
      game_name: 'speed', // make sure to filter by game name as well
    },
  });

for (const bet of bets) {
      const isWinner =
        bet.bet_type === ball_winner || bet.bet_type === parity;

      if (isWinner) {
        const win_money = bet.betting_amount * game_winner_odds;

        // Update user balance
        await this.userBalanceService.incrementMoney(bet.user_id, win_money);

        // Update betting round
        await this.prisma.bettingRound.update({
          where: { id: bet.id },
          data: {
            betting_status: 2, // win
            winning_amount: win_money,
          },
        });

        // Log win
        console.log(
          `User ${bet.user_id} won ${win_money} on bet type ${bet.bet_type}`,
        );
      } else {
        // Update betting round as loss
        await this.prisma.bettingRound.update({
          where: { id: bet.id },
          data: {
            betting_status: 1, // lose
            winning_amount: 0,
          },
        });
      }
    }
  }

} 