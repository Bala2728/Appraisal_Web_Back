import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserTypeDto } from './create-user_type.dto';

export class UpdateUserTypeDto extends PartialType(CreateUserTypeDto) {
    @ApiProperty()
    userTypeId:string;
    @ApiProperty()
    updatedBy:string;
}
