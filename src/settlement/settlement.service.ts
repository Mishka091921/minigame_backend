import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { IsettlementHandler } from './interface/settlement-handler.interface';
import { SettlementMaze2Service } from './maze-2/settlement-maze2.service';
import { SettlementSpeed4Service } from './speed-4/settlement-speed4.service';

@Injectable()
export class SettlementService implements OnModuleInit {
  private handlersMap: Map<string, IsettlementHandler> = new Map();

  constructor(
    @Inject(SettlementMaze2Service) private maze2Handler: IsettlementHandler,
    @Inject(SettlementSpeed4Service) private speed4Handler: IsettlementHandler,
  ) {}

  onModuleInit() {
    [this.maze2Handler,this.speed4Handler].forEach((handler) => {
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
