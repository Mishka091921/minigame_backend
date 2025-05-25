import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChargingService } from './money/user/charging/charging.service';
import { ChargingModule } from './money/user/charging/charging.module';
import { ChargeController } from './money/user/charging/charging.controller';
import { AppLogger } from './common/logger/logger.service';

@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    PrismaModule, 
    ChargingModule,
  ],
  
  controllers:[
    AppController, 
    ChargeController
  ],
  
  providers: [
    ChargingService,
    AppLogger
  ],
  exports:[
    AppLogger
  ]
})
export class AppModule {}
