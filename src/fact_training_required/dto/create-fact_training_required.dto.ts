import { ApiProperty } from '@nestjs/swagger';

export class CreateFactTrainingRequiredDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  appraiseeComments: string;
  @ApiProperty()
  appraiserComments: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  isActive: boolean;
}
