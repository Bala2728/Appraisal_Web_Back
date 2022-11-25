import { ApiProperty } from '@nestjs/swagger';

export class CreateUserLoginDetailDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  loginUsername: string;
  @ApiProperty()
  loginPassword: string;
  @ApiProperty()
  enableStatus: string;
  @ApiProperty()
  deleteStatus: string;
  @ApiProperty()
  createdBy: string;
  @ApiProperty()  
  IsActive: boolean;
  @ApiProperty()
  userMasterId: string;
}
