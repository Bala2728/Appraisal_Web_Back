import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserEntityDetailDto } from './create-user_entity_detail.dto';

export class UpdateUserEntityDetailDto extends PartialType(
  CreateUserEntityDetailDto,
) {
  userEntityId: string;
  @ApiProperty()
  updatedBy: string;
}
