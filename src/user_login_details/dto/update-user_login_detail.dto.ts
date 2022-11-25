import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserLoginDetailDto } from './create-user_login_detail.dto';

export class UpdateUserLoginDetailDto extends PartialType(
  CreateUserLoginDetailDto,
) {
  userLoginId: string;
  @ApiProperty()
  updatedBy: string;
}
