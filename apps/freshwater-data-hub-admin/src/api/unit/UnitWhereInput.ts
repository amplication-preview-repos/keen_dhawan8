import { DatasetListRelationFilter } from "../dataset/DatasetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UnitWhereInput = {
  datasets?: DatasetListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
