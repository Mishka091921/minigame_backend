import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import { UserSocketService } from './user.socket.service';

@WebSocketGateway({
  cors: {
    origin: '*', // Allow all origins for testing
  },
})
export class PlayerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private logger = new Logger('PlayerGateway');
  private onlinePlayers: Map<string, string> = new Map(); // userId -> socketId

  constructor(private readonly userSocketService: UserSocketService) {}

  async handleConnection(client: Socket) {
    this.logger.log(`🔌 Client connected: ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`🔌 Client disconnected: ${client.id}`);
    let disconnectedUserId: string | null = null;

    for (const [userId, socketId] of this.onlinePlayers.entries()) {
      if (socketId === client.id) {
        disconnectedUserId = userId;
        break;
      }
    }

    if (disconnectedUserId) {
      this.onlinePlayers.delete(disconnectedUserId);
      await this.userSocketService.markPlayerOffline(disconnectedUserId);
    }
  }

  @SubscribeMessage('register')
  async handleRegister(client: Socket, userId: string) {
    this.logger.log(`📩 Registering user ${userId} with socket ${client.id}`);
    this.onlinePlayers.set(userId, client.id);
    await this.userSocketService.markPlayerOnline(userId, client.id);
  }
}
