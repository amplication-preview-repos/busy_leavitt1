import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NetworkRecordWhereInput = {
  destinationBytes?: IntNullableFilter;
  duration?: IntNullableFilter;
  flag?: StringNullableFilter;
  id?: StringFilter;
  protocolType?: StringNullableFilter;
  service?: StringNullableFilter;
  sourceBytes?: IntNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
