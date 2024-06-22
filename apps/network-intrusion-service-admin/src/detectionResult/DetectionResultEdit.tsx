import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const DetectionResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="anomaly_score" source="anomalyScore" />
        <DateTimeInput label="detection_time" source="detectionTime" />
        <BooleanInput label="is_anomalous" source="isAnomalous" />
        <TextInput label="record_id" source="recordId" />
      </SimpleForm>
    </Edit>
  );
};
