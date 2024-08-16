import { Geography as TGeography } from "../api/geography/Geography";

export const GEOGRAPHY_TITLE_FIELD = "name";

export const GeographyTitle = (record: TGeography): string => {
  return record.name?.toString() || String(record.id);
};
