import { Module } from "@nestjs/common";
import { DetectionResultModuleBase } from "./base/detectionResult.module.base";
import { DetectionResultService } from "./detectionResult.service";
import { DetectionResultController } from "./detectionResult.controller";
import { DetectionResultResolver } from "./detectionResult.resolver";

@Module({
  imports: [DetectionResultModuleBase],
  controllers: [DetectionResultController],
  providers: [DetectionResultService, DetectionResultResolver],
  exports: [DetectionResultService],
})
export class DetectionResultModule {}
