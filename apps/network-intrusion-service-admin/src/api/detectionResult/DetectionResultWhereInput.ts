import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DetectionResultWhereInput = {
  anomalyScore?: FloatNullableFilter;
  detectionTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isAnomalous?: BooleanNullableFilter;
  recordId?: StringNullableFilter;
};
