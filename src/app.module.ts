import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ChargingService } from './money/user/charging/charging.service';
import { ChargingModule } from './money/user/charging/charging.module';
import { ChargeController } from './money/user/charging/charging.controller';
import { AppLogger } from './common/logger/logger.service';
import { BettingModule } from './betting/betting.module';
import { SharedModule } from './shared/shared.module';
import { MongoSchemasModule } from 'mongo-module/mongo-schemas.module';
import { RabbitMQModule } from './rabbitmq/rabbitmq.module';
import { SettlementModule } from './settlement/settlement.module';

@Module({
  imports: [
     // ✅ MongoDB connection
     MongooseModule.forRoot(
      'mongodb+srv://joshyy:joshyy@cluster0.mngll4q.mongodb.net/minigame_result?retryWrites=true&w=majority&appName=Cluster0',
      {
        connectionName:'minigame_result_connection',
        dbName: 'minigame_result',
      }
    ),
    MongoSchemasModule,
    SharedModule,
    AuthModule, 
    UsersModule, 
    PrismaModule, 
    ChargingModule, 
    BettingModule,
    RabbitMQModule,
    SettlementModule,
  ],
  
  controllers:[
    
    AppController, 
    ChargeController, 
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
