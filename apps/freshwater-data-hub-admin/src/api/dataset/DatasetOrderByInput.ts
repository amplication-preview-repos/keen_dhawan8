import { SortOrder } from "../../util/SortOrder";

export type DatasetOrderByInput = {
  collectedDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  geographyId?: SortOrder;
  id?: SortOrder;
  metricId?: SortOrder;
  name?: SortOrder;
  source?: SortOrder;
  unitId?: SortOrder;
  updatedAt?: SortOrder;
};
