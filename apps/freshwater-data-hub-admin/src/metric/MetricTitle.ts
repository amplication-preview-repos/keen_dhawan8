import { Metric as TMetric } from "../api/metric/Metric";

export const METRIC_TITLE_FIELD = "name";

export const MetricTitle = (record: TMetric): string => {
  return record.name?.toString() || String(record.id);
};
