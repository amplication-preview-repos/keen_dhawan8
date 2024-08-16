import { GeographyWhereUniqueInput } from "../geography/GeographyWhereUniqueInput";
import { MetricWhereUniqueInput } from "../metric/MetricWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DatasetUpdateInput = {
  collectedDate?: Date | null;
  description?: string | null;
  geography?: GeographyWhereUniqueInput | null;
  metric?: MetricWhereUniqueInput | null;
  name?: string | null;
  source?: string | null;
  unit?: UnitWhereUniqueInput | null;
};
