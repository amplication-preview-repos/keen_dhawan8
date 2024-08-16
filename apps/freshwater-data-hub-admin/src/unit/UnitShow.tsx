import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GEOGRAPHY_TITLE_FIELD } from "../geography/GeographyTitle";
import { METRIC_TITLE_FIELD } from "../metric/MetricTitle";
import { UNIT_TITLE_FIELD } from "./UnitTitle";

export const UnitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Dataset"
          target="unitId"
          label="Datasets"
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
            <ReferenceField
              label="Metric"
              source="metric.id"
              reference="Metric"
            >
              <TextField source={METRIC_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="source" source="source" />
            <ReferenceField label="Unit" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
