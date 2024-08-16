import * as graphql from "@nestjs/graphql";
import { GeographyResolverBase } from "./base/geography.resolver.base";
import { Geography } from "./base/Geography";
import { GeographyService } from "./geography.service";

@graphql.Resolver(() => Geography)
export class GeographyResolver extends GeographyResolverBase {
  constructor(protected readonly service: GeographyService) {
    super(service);
  }
}
