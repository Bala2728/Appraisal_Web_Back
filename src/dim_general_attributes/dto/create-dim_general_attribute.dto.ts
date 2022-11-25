import { ApiProperty } from '@nestjs/swagger';

export class CreateDimGeneralAttributeDto {
  @ApiProperty()
  keyCompetencyArea: string;
  @ApiProperty()
  keyCompetencyAreaDescription: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  isActive: boolean;
}
