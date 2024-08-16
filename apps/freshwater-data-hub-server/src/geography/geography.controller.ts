import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeographyService } from "./geography.service";
import { GeographyControllerBase } from "./base/geography.controller.base";

@swagger.ApiTags("geographies")
@common.Controller("geographies")
export class GeographyController extends GeographyControllerBase {
  constructor(protected readonly service: GeographyService) {
    super(service);
  }
}
