import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserSocketService {
  private logger = new Logger('UserSocketService');
  private onlinePlayers: Record<string, string> = {}; // userId -> socketId

  async markPlayerOnline(userId: string, socketId: string) {
    this.onlinePlayers[userId] = socketId;
    this.logger.log(`✅ Player ${userId} is now online (socket: ${socketId})`);
  }

  async markPlayerOffline(userId: string) {
    delete this.onlinePlayers[userId];
    this.logger.log(`❌ Player ${userId} is now offline`);
  }

  getOnlinePlayers() {
    return this.onlinePlayers;
  }
}
