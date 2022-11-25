import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactKeyResultAreaService } from './fact_key_result_area.service';
import { CreateFactKeyResultAreaDto } from './dto/create-fact_key_result_area.dto';
import { UpdateFactKeyResultAreaDto } from './dto/update-fact_key_result_area.dto';

@Controller('fact_key_result_area')
export class FactKeyResultAreaController {
  constructor(private readonly factKeyResultAreaService: FactKeyResultAreaService) {}

  @Post('create')
  create(@Body() createFactKeyResultAreaDto: CreateFactKeyResultAreaDto) {
    return this.factKeyResultAreaService.create(createFactKeyResultAreaDto);
  }

  @Get('findAll')
  findAll() {
    return this.factKeyResultAreaService.findAll();
  }

  @Get('findOne')
  findOne(@Body('factKeyResultAreaId') id: string) {
    return this.factKeyResultAreaService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactKeyResultAreaDto: UpdateFactKeyResultAreaDto) {
    return this.factKeyResultAreaService.update(updateFactKeyResultAreaDto);
  }

  @Delete('delete')
  remove(@Body('factKeyResultAreaId') id: string) {
    return this.factKeyResultAreaService.remove(id);
  }
}
