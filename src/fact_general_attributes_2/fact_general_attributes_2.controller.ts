import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactGeneralAttributes2Service } from './fact_general_attributes_2.service';
import { CreateFactGeneralAttributes2Dto } from './dto/create-fact_general_attributes_2.dto';
import { UpdateFactGeneralAttributes2Dto } from './dto/update-fact_general_attributes_2.dto';

@Controller('fact_general_attributes_2')
export class FactGeneralAttributes2Controller {
  constructor(private readonly factGeneralAttributes2Service: FactGeneralAttributes2Service) {}

  @Post('create')
  create(@Body() createFactGeneralAttributes2Dto: CreateFactGeneralAttributes2Dto) {
    return this.factGeneralAttributes2Service.create(createFactGeneralAttributes2Dto);
  }

  @Get('findAll')
  findAll() {
    return this.factGeneralAttributes2Service.findAll();
  }

  @Get('findOne')
  findOne(@Body('factKeyCompetencyAreaId') id: string) {
    return this.factGeneralAttributes2Service.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactGeneralAttributes2Dto: UpdateFactGeneralAttributes2Dto) {
    return this.factGeneralAttributes2Service.update(updateFactGeneralAttributes2Dto);
  }

  @Delete('delete')
  remove(@Body('factKeyCompetencyAreaId') id: string) {
    return this.factGeneralAttributes2Service.remove(id);
  }
}
