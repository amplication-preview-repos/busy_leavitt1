import * as graphql from "@nestjs/graphql";
import { AnomalyTypeResolverBase } from "./base/anomalyType.resolver.base";
import { AnomalyType } from "./base/AnomalyType";
import { AnomalyTypeService } from "./anomalyType.service";

@graphql.Resolver(() => AnomalyType)
export class AnomalyTypeResolver extends AnomalyTypeResolverBase {
  constructor(protected readonly service: AnomalyTypeService) {
    super(service);
  }
}
