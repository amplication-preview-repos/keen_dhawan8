/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UnitService } from "../unit.service";
import { UnitCreateInput } from "./UnitCreateInput";
import { Unit } from "./Unit";
import { UnitFindManyArgs } from "./UnitFindManyArgs";
import { UnitWhereUniqueInput } from "./UnitWhereUniqueInput";
import { UnitUpdateInput } from "./UnitUpdateInput";
import { DatasetFindManyArgs } from "../../dataset/base/DatasetFindManyArgs";
import { Dataset } from "../../dataset/base/Dataset";
import { DatasetWhereUniqueInput } from "../../dataset/base/DatasetWhereUniqueInput";

export class UnitControllerBase {
  constructor(protected readonly service: UnitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Unit })
  async createUnit(@common.Body() data: UnitCreateInput): Promise<Unit> {
    return await this.service.createUnit({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Unit] })
  @ApiNestedQuery(UnitFindManyArgs)
  async units(@common.Req() request: Request): Promise<Unit[]> {
    const args = plainToClass(UnitFindManyArgs, request.query);
    return this.service.units({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async unit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    const result = await this.service.unit({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUnit(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() data: UnitUpdateInput
  ): Promise<Unit | null> {
    try {
      return await this.service.updateUnit({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUnit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    try {
      return await this.service.deleteUnit({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/datasets")
  @ApiNestedQuery(DatasetFindManyArgs)
  async findDatasets(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Dataset[]> {
    const query = plainToClass(DatasetFindManyArgs, request.query);
    const results = await this.service.findDatasets(params.id, {
      ...query,
      select: {
        collectedDate: true,
        createdAt: true,
        description: true,

        geography: {
          select: {
            id: true,
          },
        },

        id: true,

        metric: {
          select: {
            id: true,
          },
        },

        name: true,
        source: true,

        unit: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/datasets")
  async connectDatasets(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/datasets")
  async updateDatasets(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/datasets")
  async disconnectDatasets(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }
}