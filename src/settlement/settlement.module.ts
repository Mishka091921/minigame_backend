import { Module } from "@nestjs/common";
import { SettlementService } from "./settlement.service";
import { SettlementMaze2Service } from "./maze-2/settlement-maze2.service";



@Module({

  providers:[
    SettlementService,
    SettlementMaze2Service
  ],

  exports:[SettlementService]

})

export class SettlementModule {}