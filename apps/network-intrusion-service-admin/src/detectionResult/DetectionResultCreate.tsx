import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const DetectionResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="anomaly_score" source="anomalyScore" />
        <DateTimeInput label="detection_time" source="detectionTime" />
        <BooleanInput label="is_anomalous" source="isAnomalous" />
        <TextInput label="record_id" source="recordId" />
      </SimpleForm>
    </Create>
  );
};
