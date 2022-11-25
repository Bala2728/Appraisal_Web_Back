import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDimGeneralAttributeDto } from './create-dim_general_attribute.dto';

export class UpdateDimGeneralAttributeDto extends PartialType(
  CreateDimGeneralAttributeDto,
) {
  keyCompetencyAreaId: string;
  @ApiProperty()
  updatedBy: string;
}
