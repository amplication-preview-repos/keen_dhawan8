import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeographyServiceBase } from "./base/geography.service.base";

@Injectable()
export class GeographyService extends GeographyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
