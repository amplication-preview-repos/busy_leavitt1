import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const NetworkRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="destination_bytes" source="destinationBytes" />
        <TextField label="duration" source="duration" />
        <TextField label="flag" source="flag" />
        <TextField label="ID" source="id" />
        <TextField label="protocol_type" source="protocolType" />
        <TextField label="service" source="service" />
        <TextField label="source_bytes" source="sourceBytes" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
