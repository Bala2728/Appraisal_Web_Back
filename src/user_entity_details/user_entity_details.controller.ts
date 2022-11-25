import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserEntityDetailsService } from './user_entity_details.service';
import { CreateUserEntityDetailDto } from './dto/create-user_entity_detail.dto';
import { UpdateUserEntityDetailDto } from './dto/update-user_entity_detail.dto';

@Controller('user_entity_details')
export class UserEntityDetailsController {
  constructor(
    private readonly userEntityDetailsService: UserEntityDetailsService,
  ) {}

  @Post('create')
  create(@Body() createUserEntityDetailDto: CreateUserEntityDetailDto) {
    return this.userEntityDetailsService.create(createUserEntityDetailDto);
  }

  @Get('findAll')
  findAll() {
    return this.userEntityDetailsService.findAll();
  }

  @Get('findOne')
  findOne(@Body('userId') id: string) {
    return this.userEntityDetailsService.findOne(id);
  }

  @Post('update')
  update(@Body() updateUserEntityDetailDto: UpdateUserEntityDetailDto) {
    return this.userEntityDetailsService.update(updateUserEntityDetailDto);
  }

  @Delete('delete')
  remove(@Body('userEntityId') id: string) {
    return this.userEntityDetailsService.remove(id);
  }
}
