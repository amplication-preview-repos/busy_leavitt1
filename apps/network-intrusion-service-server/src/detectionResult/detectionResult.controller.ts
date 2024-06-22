import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectionResultService } from "./detectionResult.service";
import { DetectionResultControllerBase } from "./base/detectionResult.controller.base";

@swagger.ApiTags("detectionResults")
@common.Controller("detectionResults")
export class DetectionResultController extends DetectionResultControllerBase {
  constructor(protected readonly service: DetectionResultService) {
    super(service);
  }
}
