// src/rabbitmq/rabbitmq.module.ts
import { Module } from '@nestjs/common';
import { RabbitMQConsumerService } from './rabbitmq.service';
import { SettlementService } from 'src/settlement/settlement.service';
import { SettlementMaze2Service } from 'src/settlement/maze-2/settlement-maze2.service';

@Module({
  providers: [
    RabbitMQConsumerService,
    SettlementService,
    SettlementMaze2Service
  ],
})
export class RabbitMQModule {}
