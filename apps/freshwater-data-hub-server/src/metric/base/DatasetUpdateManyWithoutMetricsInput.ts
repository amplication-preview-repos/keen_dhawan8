/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DatasetWhereUniqueInput } from "../../dataset/base/DatasetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DatasetUpdateManyWithoutMetricsInput {
  @Field(() => [DatasetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DatasetWhereUniqueInput],
  })
  connect?: Array<DatasetWhereUniqueInput>;

  @Field(() => [DatasetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DatasetWhereUniqueInput],
  })
  disconnect?: Array<DatasetWhereUniqueInput>;

  @Field(() => [DatasetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DatasetWhereUniqueInput],
  })
  set?: Array<DatasetWhereUniqueInput>;
}

export { DatasetUpdateManyWithoutMetricsInput as DatasetUpdateManyWithoutMetricsInput };
