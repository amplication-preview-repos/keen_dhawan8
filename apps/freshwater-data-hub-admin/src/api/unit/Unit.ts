import { Dataset } from "../dataset/Dataset";

export type Unit = {
  createdAt: Date;
  datasets?: Array<Dataset>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
