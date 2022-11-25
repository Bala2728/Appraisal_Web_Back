import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeWithRoService } from './fact_employee_with_ro.service';
import { CreateFactEmployeeWithRoDto } from './dto/create-fact_employee_with_ro.dto';
import { UpdateFactEmployeeWithRoDto } from './dto/update-fact_employee_with_ro.dto';

@Controller('fact_employee_with_ro')
export class FactEmployeeWithRoController {
  constructor(private readonly factEmployeeWithRoService: FactEmployeeWithRoService) {}

  @Post('create')
  create(@Body() createFactEmployeeWithRoDto: CreateFactEmployeeWithRoDto) {
    return this.factEmployeeWithRoService.create(createFactEmployeeWithRoDto);
  }

  @Get('findAll')
  findAll() {
    return this.factEmployeeWithRoService.findAll();
  }

  @Get('findOne')
  findOne(@Body('reviewingOfficerId') id: string) {
    return this.factEmployeeWithRoService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactEmployeeWithRoDto: UpdateFactEmployeeWithRoDto) {
    return this.factEmployeeWithRoService.update(updateFactEmployeeWithRoDto);
  }

  @Post('delete')
  remove(@Body('id') id: string) {
    return this.factEmployeeWithRoService.remove(id);
  }
}
