import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ChargingService } from './charging.service';
import { CreateChargingDTO } from './DTO/create-charging.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/common/decorators/user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('user/money/charge')
export class ChargeController {

  constructor(private chargingService: ChargingService){}

  @Post()
  async getCharge(@Body() createChargeDto: CreateChargingDTO, @User() user: any ) {

    //Check if there's pending request
    const has_charge = await this.chargingService.checkPendingRquest(user.id)

    if (has_charge.length > 0) {
      throw new HttpException('User already has a pending charge request', HttpStatus.BAD_REQUEST);
    }

    try {
      await this.chargingService.createCharging(createChargeDto, user.id,user.money);
      return 'Successfully created charge request';
    } catch (err) {
      console.log(err)
      throw new HttpException('An error occurred while processing the charge request', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
