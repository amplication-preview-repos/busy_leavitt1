import { NetworkRecordWhereInput } from "./NetworkRecordWhereInput";
import { NetworkRecordOrderByInput } from "./NetworkRecordOrderByInput";

export type NetworkRecordFindManyArgs = {
  where?: NetworkRecordWhereInput;
  orderBy?: Array<NetworkRecordOrderByInput>;
  skip?: number;
  take?: number;
};
