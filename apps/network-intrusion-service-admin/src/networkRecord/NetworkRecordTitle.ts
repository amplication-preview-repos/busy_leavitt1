import { NetworkRecord as TNetworkRecord } from "../api/networkRecord/NetworkRecord";

export const NETWORKRECORD_TITLE_FIELD = "flag";

export const NetworkRecordTitle = (record: TNetworkRecord): string => {
  return record.flag?.toString() || String(record.id);
};
