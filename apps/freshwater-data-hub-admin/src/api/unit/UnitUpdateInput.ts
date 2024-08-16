import { DatasetUpdateManyWithoutUnitsInput } from "./DatasetUpdateManyWithoutUnitsInput";

export type UnitUpdateInput = {
  datasets?: DatasetUpdateManyWithoutUnitsInput;
  name?: string | null;
};
