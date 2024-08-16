import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GEOGRAPHY_TITLE_FIELD } from "../geography/GeographyTitle";
import { METRIC_TITLE_FIELD } from "../metric/MetricTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const DatasetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Datasets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="collectedDate" source="collectedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <ReferenceField
          label="Geography"
          source="geography.id"
          reference="Geography"
        >
          <TextField source={GEOGRAPHY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Metric" source="metric.id" reference="Metric">
          <TextField source={METRIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="source" source="source" />
        <ReferenceField label="Unit" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
