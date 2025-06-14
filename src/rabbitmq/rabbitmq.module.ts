// src/rabbitmq/rabbitmq.module.ts
import { Module } from '@nestjs/common';
import { RabbitMQConsumerService } from './rabbitmq.service';
import { SettlementService } from 'src/settlement/settlement.service';
import { SettlementMaze2Service } from 'src/settlement/maze-2/settlement-maze2.service';
import { SettlementSpeed4Service } from 'src/settlement/speed-4/settlement-speed4.service';
import { SettlementModule } from 'src/settlement/settlement.module';

@Module({
  imports: [SettlementModule],
  providers: [
    RabbitMQConsumerService,
  ],
})
export class RabbitMQModule {}
