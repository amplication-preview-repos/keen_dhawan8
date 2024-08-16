import { GeographyWhereInput } from "./GeographyWhereInput";
import { GeographyOrderByInput } from "./GeographyOrderByInput";

export type GeographyFindManyArgs = {
  where?: GeographyWhereInput;
  orderBy?: Array<GeographyOrderByInput>;
  skip?: number;
  take?: number;
};
