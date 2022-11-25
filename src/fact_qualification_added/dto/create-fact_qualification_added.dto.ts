import { ApiProperty } from '@nestjs/swagger';

export class CreateFactQualificationAddedDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  qualificationCertificationTitle: string;
  @ApiProperty()
  instituteUniversity: string;
  @ApiProperty()
  percentage: string;
  @ApiProperty()
  uploadCertificates: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  isActive: boolean;
}
