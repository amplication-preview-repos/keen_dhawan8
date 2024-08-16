import { Dataset } from "../dataset/Dataset";

export type Metric = {
  createdAt: Date;
  datasets?: Array<Dataset>;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
