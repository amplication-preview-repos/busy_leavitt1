import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NetworkRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"NetworkRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
