import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserLoginDetailsService } from './user_login_details.service';
import { CreateUserLoginDetailDto } from './dto/create-user_login_detail.dto';
import { UpdateUserLoginDetailDto } from './dto/update-user_login_detail.dto';
import { LoginResponseDto } from './dto/login_response.dto';

@Controller('user_login_details')
export class UserLoginDetailsController {
  constructor(
    private readonly userLoginDetailsService: UserLoginDetailsService,
  ) {}

  @Post('create')
  create(@Body() createUserLoginDetailDto: CreateUserLoginDetailDto) {
    return this.userLoginDetailsService.create(createUserLoginDetailDto);
  }

  @Get('findAll')
  findAll() {
    return this.userLoginDetailsService.findAll();
  }

  @Get('findOne')
  findOne(@Body('userLoginId') id: string) {
    return this.userLoginDetailsService.findOne(id);
  }

  @Post('update')
  update(@Body() updateUserLoginDetailDto: UpdateUserLoginDetailDto) {
    return this.userLoginDetailsService.update(updateUserLoginDetailDto);
  }

  @Post('delete')
  remove(@Body('userLoginId') id: string) {
    return this.userLoginDetailsService.remove(id);
  }

  @Post('loginUser')
  loginUser(@Body() loginResponseDto: LoginResponseDto) {
    return this.userLoginDetailsService.loginUser(loginResponseDto);
  }
}
