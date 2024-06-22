import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectionResultServiceBase } from "./base/detectionResult.service.base";

@Injectable()
export class DetectionResultService extends DetectionResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
