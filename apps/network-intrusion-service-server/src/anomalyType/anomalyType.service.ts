import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnomalyTypeServiceBase } from "./base/anomalyType.service.base";

@Injectable()
export class AnomalyTypeService extends AnomalyTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
