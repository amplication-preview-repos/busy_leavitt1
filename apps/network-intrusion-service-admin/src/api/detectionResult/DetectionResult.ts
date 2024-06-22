export type DetectionResult = {
  anomalyScore: number | null;
  createdAt: Date;
  detectionTime: Date | null;
  id: string;
  isAnomalous: boolean | null;
  recordId: string | null;
  updatedAt: Date;
};
