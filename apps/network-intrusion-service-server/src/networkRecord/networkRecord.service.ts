import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkRecordServiceBase } from "./base/networkRecord.service.base";

@Injectable()
export class NetworkRecordService extends NetworkRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
