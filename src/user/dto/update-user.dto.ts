import { Post } from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { create } from 'domain';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    userMasterId:string;
    @ApiProperty()
    updatedBy:string;
}





 

