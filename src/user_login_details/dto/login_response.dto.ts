import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty()
  loginUsername: string;
  @ApiProperty()
  loginPassword: string;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  userId: string;
}
