import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnomalyTypeService } from "./anomalyType.service";
import { AnomalyTypeControllerBase } from "./base/anomalyType.controller.base";

@swagger.ApiTags("anomalyTypes")
@common.Controller("anomalyTypes")
export class AnomalyTypeController extends AnomalyTypeControllerBase {
  constructor(protected readonly service: AnomalyTypeService) {
    super(service);
  }
}
