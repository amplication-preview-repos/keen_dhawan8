import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GeographyTitle } from "../geography/GeographyTitle";
import { MetricTitle } from "../metric/MetricTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const DatasetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="collectedDate" source="collectedDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="geography.id"
          reference="Geography"
          label="Geography"
        >
          <SelectInput optionText={GeographyTitle} />
        </ReferenceInput>
        <ReferenceInput source="metric.id" reference="Metric" label="Metric">
          <SelectInput optionText={MetricTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="source" source="source" />
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
