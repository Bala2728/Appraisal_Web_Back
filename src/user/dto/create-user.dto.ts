import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  // userTypeId:string;
  @IsNotEmpty({ message: 'User Name should not be Empty' })
  @MaxLength(50)
  @ApiProperty()
  userName: string;
  @IsNotEmpty({ message: 'User ID should not be Empty' })
  @MaxLength(50)
  @ApiProperty()
  userId: string;
  @IsNotEmpty({ message: 'Role should not be Empty' })
  @MaxLength(50)
  @ApiProperty()
  role: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Date of Joining should not be Empty' })
  dateOfJoining: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Designation should not be Empty' })
  @MaxLength(50)
  designation: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Department should not be Empty' })
  @MaxLength(50)
  department: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Qualifications should not be Empty' })
  @MaxLength(50)
  qualifications: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Grade Level should not be Empty' })
  @MaxLength(50)
  gradeLevel: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Total Experience should not be Empty' })
  @MaxLength(20)
  totalExperience: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Primary Skill should not be Empty' })
  @MaxLength(50)
  primarySkill: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Inter Change Exp should not be Empty' })
  @MaxLength(50)
  organizationExp: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Performance Assessment Period should not be Empty' })
  @MaxLength(50)
  performanceAssessmentPeriod: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  employerType: string;
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
  projectName: string;
  @ApiProperty()
  projectManager: string;
  @ApiProperty()
  reportingManager: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Enable Status should not be Empty' })
  enableStatus: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Delete Status should not be Empty' })
  deleteStatus: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Created By should not be Empty' })
  createdBy: string;
  @ApiProperty()
  @IsNotEmpty({ message: 'Active Status should not be Empty' })
  isActive: boolean;
  static userId: any;
  static userName: any;
  static role: any;
}
