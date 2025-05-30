import { Injectable } from "@nestjs/common";
import { IsettlementHandler } from "../interface/settlement-handler.interface";



@Injectable()
export class SettlementMaze2Service implements IsettlementHandler{
  getGameName(): string {
      return 'maze_2';
  }

  async settle(round_id: string): Promise<void>{

    console.log(round_id);


  }

} 