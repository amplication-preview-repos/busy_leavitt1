import { AnomalyTypeWhereInput } from "./AnomalyTypeWhereInput";
import { AnomalyTypeOrderByInput } from "./AnomalyTypeOrderByInput";

export type AnomalyTypeFindManyArgs = {
  where?: AnomalyTypeWhereInput;
  orderBy?: Array<AnomalyTypeOrderByInput>;
  skip?: number;
  take?: number;
};
