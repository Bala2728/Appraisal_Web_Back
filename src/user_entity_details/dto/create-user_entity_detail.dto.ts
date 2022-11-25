import { ApiProperty } from '@nestjs/swagger';

export class CreateUserEntityDetailDto {
  @ApiProperty()
  loginUsername: string;
  @ApiProperty()
  loginPassword: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  designation: string;
  @ApiProperty()
  dateOfJoining: Date;
  @ApiProperty()
  role: string;
  @ApiProperty()
  department: string;
  @ApiProperty()
  qualifications: string;
  @ApiProperty()
  gradeLevel: string;
  @ApiProperty()
  totalExperience: string;
  @ApiProperty()
  primarySkill: string;
  @ApiProperty()
  interchangeExp: string;
  @ApiProperty()
  performanceAssessmentPeriod: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  employeeType: string;
  @ApiProperty()
  branch: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  mobileNumber: string;
  @ApiProperty()
  spineAccess: string;
  @ApiProperty()
  mediClaim: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()
  isActive: boolean;
  userMasterId: string;
}
