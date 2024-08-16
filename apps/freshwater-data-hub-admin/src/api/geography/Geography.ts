import { JsonValue } from "type-fest";
import { Dataset } from "../dataset/Dataset";

export type Geography = {
  coordinates: JsonValue;
  createdAt: Date;
  datasets?: Array<Dataset>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
