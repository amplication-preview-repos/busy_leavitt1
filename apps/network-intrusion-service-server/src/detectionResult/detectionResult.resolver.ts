import * as graphql from "@nestjs/graphql";
import { DetectionResultResolverBase } from "./base/detectionResult.resolver.base";
import { DetectionResult } from "./base/DetectionResult";
import { DetectionResultService } from "./detectionResult.service";

@graphql.Resolver(() => DetectionResult)
export class DetectionResultResolver extends DetectionResultResolverBase {
  constructor(protected readonly service: DetectionResultService) {
    super(service);
  }
}
