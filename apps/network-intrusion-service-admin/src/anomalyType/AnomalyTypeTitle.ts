import { AnomalyType as TAnomalyType } from "../api/anomalyType/AnomalyType";

export const ANOMALYTYPE_TITLE_FIELD = "name";

export const AnomalyTypeTitle = (record: TAnomalyType): string => {
  return record.name?.toString() || String(record.id);
};
