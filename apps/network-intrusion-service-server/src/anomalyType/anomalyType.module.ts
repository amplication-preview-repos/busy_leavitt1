import { Module } from "@nestjs/common";
import { AnomalyTypeModuleBase } from "./base/anomalyType.module.base";
import { AnomalyTypeService } from "./anomalyType.service";
import { AnomalyTypeController } from "./anomalyType.controller";
import { AnomalyTypeResolver } from "./anomalyType.resolver";

@Module({
  imports: [AnomalyTypeModuleBase],
  controllers: [AnomalyTypeController],
  providers: [AnomalyTypeService, AnomalyTypeResolver],
  exports: [AnomalyTypeService],
})
export class AnomalyTypeModule {}
