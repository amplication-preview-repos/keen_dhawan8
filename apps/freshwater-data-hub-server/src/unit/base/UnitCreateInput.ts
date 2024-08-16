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
import { DatasetCreateNestedManyWithoutUnitsInput } from "./DatasetCreateNestedManyWithoutUnitsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UnitCreateInput {
  @ApiProperty({
    required: false,
    type: () => DatasetCreateNestedManyWithoutUnitsInput,
  })
  @ValidateNested()
  @Type(() => DatasetCreateNestedManyWithoutUnitsInput)
  @IsOptional()
  @Field(() => DatasetCreateNestedManyWithoutUnitsInput, {
    nullable: true,
  })
  datasets?: DatasetCreateNestedManyWithoutUnitsInput;

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
}

export { UnitCreateInput as UnitCreateInput };
