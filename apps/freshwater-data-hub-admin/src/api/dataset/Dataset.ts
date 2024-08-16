import { Geography } from "../geography/Geography";
import { Metric } from "../metric/Metric";
import { Unit } from "../unit/Unit";

export type Dataset = {
  collectedDate: Date | null;
  createdAt: Date;
  description: string | null;
  geography?: Geography | null;
  id: string;
  metric?: Metric | null;
  name: string | null;
  source: string | null;
  unit?: Unit | null;
  updatedAt: Date;
};
