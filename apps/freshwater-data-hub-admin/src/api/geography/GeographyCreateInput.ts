import { InputJsonValue } from "../../types";
import { DatasetCreateNestedManyWithoutGeographiesInput } from "./DatasetCreateNestedManyWithoutGeographiesInput";

export type GeographyCreateInput = {
  coordinates?: InputJsonValue;
  datasets?: DatasetCreateNestedManyWithoutGeographiesInput;
  name?: string | null;
};
