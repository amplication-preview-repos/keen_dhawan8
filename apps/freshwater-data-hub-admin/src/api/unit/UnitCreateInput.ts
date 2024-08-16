import { DatasetCreateNestedManyWithoutUnitsInput } from "./DatasetCreateNestedManyWithoutUnitsInput";

export type UnitCreateInput = {
  datasets?: DatasetCreateNestedManyWithoutUnitsInput;
  name?: string | null;
};
