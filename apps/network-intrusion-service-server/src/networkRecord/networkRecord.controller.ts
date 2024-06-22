import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NetworkRecordService } from "./networkRecord.service";
import { NetworkRecordControllerBase } from "./base/networkRecord.controller.base";

@swagger.ApiTags("networkRecords")
@common.Controller("networkRecords")
export class NetworkRecordController extends NetworkRecordControllerBase {
  constructor(protected readonly service: NetworkRecordService) {
    super(service);
  }
}
