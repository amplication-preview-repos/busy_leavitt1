import { DetectionResultWhereInput } from "./DetectionResultWhereInput";
import { DetectionResultOrderByInput } from "./DetectionResultOrderByInput";

export type DetectionResultFindManyArgs = {
  where?: DetectionResultWhereInput;
  orderBy?: Array<DetectionResultOrderByInput>;
  skip?: number;
  take?: number;
};
