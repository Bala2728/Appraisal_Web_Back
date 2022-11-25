import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '../config/response';
import { User } from './entities/user.entity';
import { DeleteResult } from 'typeorm';
import { get } from 'http';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
    return this.userService.create(createUserDto);
  }

  @Get('findAll')
  findAll(): Promise<ApiResponse<User[]>> {
    return this.userService.findAll();
  }

  @Post('findOne')
  findOne(@Body('userId') id: string): Promise<ApiResponse<User>> {
    return this.userService.findOne(id);
  }

  @Post('update')
  update(@Body() updateUserDto: UpdateUserDto): Promise<ApiResponse<User>> {
    return this.userService.update(updateUserDto);
  }

  @Delete('delete')
  remove(@Body('id') id: string): Promise<ApiResponse<DeleteResult>> {
    return this.userService.remove(id);
  }

  //   @Get('employee_list')
  //   list(@Body() createUserDto: CreateUserDto) {
  //     return this.userService.list(createUserDto);
  // }
}
