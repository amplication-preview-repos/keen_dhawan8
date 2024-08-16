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
import { MetricService } from "../metric.service";
import { MetricCreateInput } from "./MetricCreateInput";
import { Metric } from "./Metric";
import { MetricFindManyArgs } from "./MetricFindManyArgs";
import { MetricWhereUniqueInput } from "./MetricWhereUniqueInput";
import { MetricUpdateInput } from "./MetricUpdateInput";
import { DatasetFindManyArgs } from "../../dataset/base/DatasetFindManyArgs";
import { Dataset } from "../../dataset/base/Dataset";
import { DatasetWhereUniqueInput } from "../../dataset/base/DatasetWhereUniqueInput";

export class MetricControllerBase {
  constructor(protected readonly service: MetricService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Metric })
  async createMetric(@common.Body() data: MetricCreateInput): Promise<Metric> {
    return await this.service.createMetric({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Metric] })
  @ApiNestedQuery(MetricFindManyArgs)
  async metrics(@common.Req() request: Request): Promise<Metric[]> {
    const args = plainToClass(MetricFindManyArgs, request.query);
    return this.service.metrics({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Metric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async metric(
    @common.Param() params: MetricWhereUniqueInput
  ): Promise<Metric | null> {
    const result = await this.service.metric({
      where: params,
      select: {
        createdAt: true,
        description: true,
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
  @swagger.ApiOkResponse({ type: Metric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMetric(
    @common.Param() params: MetricWhereUniqueInput,
    @common.Body() data: MetricUpdateInput
  ): Promise<Metric | null> {
    try {
      return await this.service.updateMetric({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
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
  @swagger.ApiOkResponse({ type: Metric })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMetric(
    @common.Param() params: MetricWhereUniqueInput
  ): Promise<Metric | null> {
    try {
      return await this.service.deleteMetric({
        where: params,
        select: {
          createdAt: true,
          description: true,
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
    @common.Param() params: MetricWhereUniqueInput
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
    @common.Param() params: MetricWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        connect: body,
      },
    };
    await this.service.updateMetric({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/datasets")
  async updateDatasets(
    @common.Param() params: MetricWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        set: body,
      },
    };
    await this.service.updateMetric({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/datasets")
  async disconnectDatasets(
    @common.Param() params: MetricWhereUniqueInput,
    @common.Body() body: DatasetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      datasets: {
        disconnect: body,
      },
    };
    await this.service.updateMetric({
      where: params,
      data,
      select: { id: true },
    });
  }
}