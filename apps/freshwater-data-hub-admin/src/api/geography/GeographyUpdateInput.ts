import { InputJsonValue } from "../../types";
import { DatasetUpdateManyWithoutGeographiesInput } from "./DatasetUpdateManyWithoutGeographiesInput";

export type GeographyUpdateInput = {
  coordinates?: InputJsonValue;
  datasets?: DatasetUpdateManyWithoutGeographiesInput;
  name?: string | null;
};
