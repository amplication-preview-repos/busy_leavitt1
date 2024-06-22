import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const NetworkRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="destination_bytes"
          source="destinationBytes"
        />
        <NumberInput step={1} label="duration" source="duration" />
        <TextInput label="flag" source="flag" />
        <TextInput label="protocol_type" source="protocolType" />
        <TextInput label="service" source="service" />
        <NumberInput step={1} label="source_bytes" source="sourceBytes" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
