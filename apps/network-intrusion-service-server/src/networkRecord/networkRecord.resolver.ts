import * as graphql from "@nestjs/graphql";
import { NetworkRecordResolverBase } from "./base/networkRecord.resolver.base";
import { NetworkRecord } from "./base/NetworkRecord";
import { NetworkRecordService } from "./networkRecord.service";

@graphql.Resolver(() => NetworkRecord)
export class NetworkRecordResolver extends NetworkRecordResolverBase {
  constructor(protected readonly service: NetworkRecordService) {
    super(service);
  }
}
