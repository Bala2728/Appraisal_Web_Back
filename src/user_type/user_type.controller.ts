import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTypeService } from './user_type.service';
import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
import { ApiResponse } from '../config/response';
import { UserType } from './entities/user_type.entity';
import { DeleteResult } from 'typeorm';

@Controller('user_detail')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Post('create')
  create(@Body() createUserTypeDto: CreateUserTypeDto):Promise<ApiResponse<UserType>> {
    return this.userTypeService.create(createUserTypeDto);
  }

  @Get('findAll')
  findAll():Promise<ApiResponse<UserType[]>> {
    return this.userTypeService.findAll();
  }

  @Get('findOne')
  findOne(@Body('userTypeId') id: string):Promise<ApiResponse<UserType>> {
    return this.userTypeService.findOne(id);
  }

  @Post('update')
  update(@Body() updateUserTypeDto: UpdateUserTypeDto):Promise<ApiResponse<UserType>> {
    return this.userTypeService.update(updateUserTypeDto);
  }

  @Post('delete')
  remove(@Body('userTypeId') id: string):Promise<ApiResponse<DeleteResult>> {
    return this.userTypeService.remove(id);
  }
}
