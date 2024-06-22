import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const DetectionResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DetectionResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="anomaly_score" source="anomalyScore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detection_time" source="detectionTime" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_anomalous" source="isAnomalous" />
        <TextField label="record_id" source="recordId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
