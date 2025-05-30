import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BettingService } from './betting.service';
import { UserBalanceService } from 'src/shared/user-balance.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BettingDTO } from './DTO/create-betting.dto';
import { User } from 'src/common/decorators/user.decorator';


@UseGuards(JwtAuthGuard)

@Controller('place-bet')
export class BettingController {


  constructor(
    private readonly userBalanceService: UserBalanceService,
    private readonly bettingService: BettingService
  )
  {}

  

  @Post()
  async placeBet(@Body() bettingDto: BettingDTO, @User() user: any) {
      console.log(bettingDto);
      console.log(user);
      // Validate the user balance
      this.bettingService.placeBet(bettingDto, user.id)

      return bettingDto;
      //Currently 1 bet per user per game
      // return await this.bettingService.placeBet();

  }



}
