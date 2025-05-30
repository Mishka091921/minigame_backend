// src/rabbitmq/rabbitmq.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqp-connection-manager';
import { SettlementService } from 'src/settlement/settlement.service';

@Injectable()
export class RabbitMQConsumerService implements OnModuleInit {

  constructor(private readonly settlementService: SettlementService){}
  
  private connection;
  private channel;

  async onModuleInit() {
    this.connection = amqp.connect(['amqp://localhost:5672']);
    this.channel = this.connection.createChannel({
      json: true,
      setup: async (channel) => {
        await channel.assertQueue('minigames', { durable: true });

        await channel.consume(
          'minigames',
          async (msg) => {
            if (msg !== null) {


              const messageString = msg.content.toString();
              let content;
              content = JSON.parse(messageString);
              // Example: do something based on the event
              if (content.event == 'result') {
                  console.log(content.data);

                  // await this.handleUserRegistered(content.data);

                  await this.settlementService.settleBetsByGame(content.data.game_name, content.data.round_id, content.data);

              }

              // channel.ack(msg);
            }
          },
          { noAck: false },
        );
      },
    });

    this.connection.on('connect', () => console.log('✅ Connected to RabbitMQ'));
    this.connection.on('disconnect', (err) =>
      console.error('❌ Disconnected from RabbitMQ', err),
    );
  }

  private async handleUserRegistered(data: any) {
    console.log(`🎉 Welcome email sent to ${data.email}`);
    // You could also call a mail service or log to a DB
  }
}
