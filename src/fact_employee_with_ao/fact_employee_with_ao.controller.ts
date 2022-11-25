import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeWithAoService } from './fact_employee_with_ao.service';
import { CreateFactEmployeeWithAoDto } from './dto/create-fact_employee_with_ao.dto';
import { UpdateFactEmployeeWithAoDto } from './dto/update-fact_employee_with_ao.dto';
import { PeriodWorkedDto } from './dto/period_worked.dto';

@Controller('fact_employee_with_ao')
export class FactEmployeeWithAoController {
  constructor(private readonly factEmployeeWithAoService: FactEmployeeWithAoService) {}

  @Post('create')
  create(@Body() createFactEmployeeWithAoDto: CreateFactEmployeeWithAoDto) {
    return this.factEmployeeWithAoService.create(createFactEmployeeWithAoDto);
  }

  @Post("createPeriodWorked")
  createPeriodWorked(@Body() periodWorkedDto:PeriodWorkedDto){
    return this.factEmployeeWithAoService.periodWork(periodWorkedDto)
  }

  @Get('findAll')
  findAll() {
    return this.factEmployeeWithAoService.findAll();
  }

  @Get('findOne')
  findOne(@Body('appraisingOfficerId') id: string) {
    return this.factEmployeeWithAoService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactEmployeeWithAoDto: UpdateFactEmployeeWithAoDto) {
    return this.factEmployeeWithAoService.update(updateFactEmployeeWithAoDto);
  }

  @Post('delete')
  remove(@Body('appraisingOfficerId') id: string) {
    return this.factEmployeeWithAoService.remove(id);
  }
}
