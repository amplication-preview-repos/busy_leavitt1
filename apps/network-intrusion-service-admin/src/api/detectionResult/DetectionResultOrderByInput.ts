import { SortOrder } from "../../util/SortOrder";

export type DetectionResultOrderByInput = {
  anomalyScore?: SortOrder;
  createdAt?: SortOrder;
  detectionTime?: SortOrder;
  id?: SortOrder;
  isAnomalous?: SortOrder;
  recordId?: SortOrder;
  updatedAt?: SortOrder;
};
