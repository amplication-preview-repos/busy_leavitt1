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
import { AnomalyType } from "./AnomalyType";
import { AnomalyTypeCountArgs } from "./AnomalyTypeCountArgs";
import { AnomalyTypeFindManyArgs } from "./AnomalyTypeFindManyArgs";
import { AnomalyTypeFindUniqueArgs } from "./AnomalyTypeFindUniqueArgs";
import { CreateAnomalyTypeArgs } from "./CreateAnomalyTypeArgs";
import { UpdateAnomalyTypeArgs } from "./UpdateAnomalyTypeArgs";
import { DeleteAnomalyTypeArgs } from "./DeleteAnomalyTypeArgs";
import { AnomalyTypeService } from "../anomalyType.service";
@graphql.Resolver(() => AnomalyType)
export class AnomalyTypeResolverBase {
  constructor(protected readonly service: AnomalyTypeService) {}

  async _anomalyTypesMeta(
    @graphql.Args() args: AnomalyTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AnomalyType])
  async anomalyTypes(
    @graphql.Args() args: AnomalyTypeFindManyArgs
  ): Promise<AnomalyType[]> {
    return this.service.anomalyTypes(args);
  }

  @graphql.Query(() => AnomalyType, { nullable: true })
  async anomalyType(
    @graphql.Args() args: AnomalyTypeFindUniqueArgs
  ): Promise<AnomalyType | null> {
    const result = await this.service.anomalyType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnomalyType)
  async createAnomalyType(
    @graphql.Args() args: CreateAnomalyTypeArgs
  ): Promise<AnomalyType> {
    return await this.service.createAnomalyType({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AnomalyType)
  async updateAnomalyType(
    @graphql.Args() args: UpdateAnomalyTypeArgs
  ): Promise<AnomalyType | null> {
    try {
      return await this.service.updateAnomalyType({
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

  @graphql.Mutation(() => AnomalyType)
  async deleteAnomalyType(
    @graphql.Args() args: DeleteAnomalyTypeArgs
  ): Promise<AnomalyType | null> {
    try {
      return await this.service.deleteAnomalyType(args);
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
