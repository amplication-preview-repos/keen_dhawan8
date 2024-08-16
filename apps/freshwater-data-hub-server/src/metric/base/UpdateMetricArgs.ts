/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MetricWhereUniqueInput } from "./MetricWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MetricUpdateInput } from "./MetricUpdateInput";

@ArgsType()
class UpdateMetricArgs {
  @ApiProperty({
    required: true,
    type: () => MetricWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MetricWhereUniqueInput)
  @Field(() => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MetricUpdateInput,
  })
  @ValidateNested()
  @Type(() => MetricUpdateInput)
  @Field(() => MetricUpdateInput, { nullable: false })
  data!: MetricUpdateInput;
}

export { UpdateMetricArgs as UpdateMetricArgs };