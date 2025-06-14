import { Module } from "@nestjs/common";
import { SettlementService } from "./settlement.service";
import { SettlementMaze2Service } from "./maze-2/settlement-maze2.service";
import { SharedModule } from "src/shared/shared.module";
import { AppLogger } from "src/common/logger/logger.service";
import { SettlementSpeed4Service } from "./speed-4/settlement-speed4.service";



@Module({
  providers:[
    SettlementService,
    SettlementMaze2Service,
    SettlementSpeed4Service,
    SharedModule,

  ],
  exports:[
    SettlementService,
    SettlementMaze2Service,
    SettlementSpeed4Service,
  ]

})

export class SettlementModule {}