import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const DetectionResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="anomaly_score" source="anomalyScore" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detection_time" source="detectionTime" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_anomalous" source="isAnomalous" />
        <TextField label="record_id" source="recordId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
