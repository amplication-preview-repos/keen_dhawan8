import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GeographyWhereUniqueInput } from "../geography/GeographyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MetricWhereUniqueInput } from "../metric/MetricWhereUniqueInput";
import { UnitWhereUniqueInput } from "../unit/UnitWhereUniqueInput";

export type DatasetWhereInput = {
  collectedDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  geography?: GeographyWhereUniqueInput;
  id?: StringFilter;
  metric?: MetricWhereUniqueInput;
  name?: StringNullableFilter;
  source?: StringNullableFilter;
  unit?: UnitWhereUniqueInput;
};
