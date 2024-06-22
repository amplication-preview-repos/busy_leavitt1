import { Module } from "@nestjs/common";
import { NetworkRecordModuleBase } from "./base/networkRecord.module.base";
import { NetworkRecordService } from "./networkRecord.service";
import { NetworkRecordController } from "./networkRecord.controller";
import { NetworkRecordResolver } from "./networkRecord.resolver";

@Module({
  imports: [NetworkRecordModuleBase],
  controllers: [NetworkRecordController],
  providers: [NetworkRecordService, NetworkRecordResolver],
  exports: [NetworkRecordService],
})
export class NetworkRecordModule {}
