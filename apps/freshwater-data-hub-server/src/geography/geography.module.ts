import { Module } from "@nestjs/common";
import { GeographyModuleBase } from "./base/geography.module.base";
import { GeographyService } from "./geography.service";
import { GeographyController } from "./geography.controller";
import { GeographyResolver } from "./geography.resolver";

@Module({
  imports: [GeographyModuleBase],
  controllers: [GeographyController],
  providers: [GeographyService, GeographyResolver],
  exports: [GeographyService],
})
export class GeographyModule {}
