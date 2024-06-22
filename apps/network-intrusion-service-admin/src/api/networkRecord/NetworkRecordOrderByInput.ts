import { SortOrder } from "../../util/SortOrder";

export type NetworkRecordOrderByInput = {
  createdAt?: SortOrder;
  destinationBytes?: SortOrder;
  duration?: SortOrder;
  flag?: SortOrder;
  id?: SortOrder;
  protocolType?: SortOrder;
  service?: SortOrder;
  sourceBytes?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
