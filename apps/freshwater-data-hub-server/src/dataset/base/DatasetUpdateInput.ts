/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { GeographyWhereUniqueInput } from "../../geography/base/GeographyWhereUniqueInput";
import { MetricWhereUniqueInput } from "../../metric/base/MetricWhereUniqueInput";
import { UnitWhereUniqueInput } from "../../unit/base/UnitWhereUniqueInput";

@InputType()
class DatasetUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  collectedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => GeographyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GeographyWhereUniqueInput)
  @IsOptional()
  @Field(() => GeographyWhereUniqueInput, {
    nullable: true,
  })
  geography?: GeographyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MetricWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MetricWhereUniqueInput)
  @IsOptional()
  @Field(() => MetricWhereUniqueInput, {
    nullable: true,
  })
  metric?: MetricWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  source?: string | null;

  @ApiProperty({
    required: false,
    type: () => UnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UnitWhereUniqueInput)
  @IsOptional()
  @Field(() => UnitWhereUniqueInput, {
    nullable: true,
  })
  unit?: UnitWhereUniqueInput | null;
}

export { DatasetUpdateInput as DatasetUpdateInput };
