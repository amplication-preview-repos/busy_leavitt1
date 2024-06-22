/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { NetworkRecord } from "./NetworkRecord";
import { NetworkRecordCountArgs } from "./NetworkRecordCountArgs";
import { NetworkRecordFindManyArgs } from "./NetworkRecordFindManyArgs";
import { NetworkRecordFindUniqueArgs } from "./NetworkRecordFindUniqueArgs";
import { CreateNetworkRecordArgs } from "./CreateNetworkRecordArgs";
import { UpdateNetworkRecordArgs } from "./UpdateNetworkRecordArgs";
import { DeleteNetworkRecordArgs } from "./DeleteNetworkRecordArgs";
import { NetworkRecordService } from "../networkRecord.service";
@graphql.Resolver(() => NetworkRecord)
export class NetworkRecordResolverBase {
  constructor(protected readonly service: NetworkRecordService) {}

  async _networkRecordsMeta(
    @graphql.Args() args: NetworkRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [NetworkRecord])
  async networkRecords(
    @graphql.Args() args: NetworkRecordFindManyArgs
  ): Promise<NetworkRecord[]> {
    return this.service.networkRecords(args);
  }

  @graphql.Query(() => NetworkRecord, { nullable: true })
  async networkRecord(
    @graphql.Args() args: NetworkRecordFindUniqueArgs
  ): Promise<NetworkRecord | null> {
    const result = await this.service.networkRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NetworkRecord)
  async createNetworkRecord(
    @graphql.Args() args: CreateNetworkRecordArgs
  ): Promise<NetworkRecord> {
    return await this.service.createNetworkRecord({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => NetworkRecord)
  async updateNetworkRecord(
    @graphql.Args() args: UpdateNetworkRecordArgs
  ): Promise<NetworkRecord | null> {
    try {
      return await this.service.updateNetworkRecord({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => NetworkRecord)
  async deleteNetworkRecord(
    @graphql.Args() args: DeleteNetworkRecordArgs
  ): Promise<NetworkRecord | null> {
    try {
      return await this.service.deleteNetworkRecord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
