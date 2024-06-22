import { DetectionResult as TDetectionResult } from "../api/detectionResult/DetectionResult";

export const DETECTIONRESULT_TITLE_FIELD = "recordId";

export const DetectionResultTitle = (record: TDetectionResult): string => {
  return record.recordId?.toString() || String(record.id);
};
