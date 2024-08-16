import { JsonFilter } from "../../util/JsonFilter";
import { DatasetListRelationFilter } from "../dataset/DatasetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GeographyWhereInput = {
  coordinates?: JsonFilter;
  datasets?: DatasetListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
