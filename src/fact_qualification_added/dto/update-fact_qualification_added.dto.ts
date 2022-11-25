import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactQualificationAddedDto } from './create-fact_qualification_added.dto';

export class UpdateFactQualificationAddedDto extends PartialType(
  CreateFactQualificationAddedDto,
) {
  qualificationAddedId: string;
  @ApiProperty()
  updatedBy: string;
}
