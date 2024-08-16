import { DatasetCreateNestedManyWithoutMetricsInput } from "./DatasetCreateNestedManyWithoutMetricsInput";

export type MetricCreateInput = {
  datasets?: DatasetCreateNestedManyWithoutMetricsInput;
  description?: string | null;
  name?: string | null;
};
