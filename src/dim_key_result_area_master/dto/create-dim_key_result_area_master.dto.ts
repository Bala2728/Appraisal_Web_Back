import { ApiProperty } from '@nestjs/swagger';

export class CreateDimKeyResultAreaMasterDto {
  @ApiProperty()
  keyResultAreaHeading: string;
  @ApiProperty()
  keyResultAreaHeadingDescription: string;
  @ApiProperty()
  keyResultAreaSubHeading: string;
  @ApiProperty()
  keyResultAreaSubHeadingDescription: string;
  @ApiProperty()
  percentageWeightage: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  isActive: boolean;
}
