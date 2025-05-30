import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { IsettlementHandler } from './interface/settlement-handler.interface';
import { SettlementMaze2Service } from './maze-2/settlement-maze2.service';

@Injectable()
export class SettlementService implements OnModuleInit {
  private handlersMap: Map<string, IsettlementHandler> = new Map();

  constructor(
    @Inject(SettlementMaze2Service) private maze2Handler: IsettlementHandler,
  ) {}

  onModuleInit() {
    [this.maze2Handler].forEach((handler) => {
      this.handlersMap.set(handler.getGameName(), handler);
    });
  }

  async settleBetsByGame(gameName: string, roundId: string, data?: any) {
    const handler = this.handlersMap.get(gameName);
    if (!handler) {
      throw new Error(`No settlement handler found for game: ${gameName}`);
    }
    await handler.settle(roundId, data);
  }
}
