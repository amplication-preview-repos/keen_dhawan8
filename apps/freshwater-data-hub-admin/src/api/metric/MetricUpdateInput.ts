import { DatasetUpdateManyWithoutMetricsInput } from "./DatasetUpdateManyWithoutMetricsInput";

export type MetricUpdateInput = {
  datasets?: DatasetUpdateManyWithoutMetricsInput;
  description?: string | null;
  name?: string | null;
};
