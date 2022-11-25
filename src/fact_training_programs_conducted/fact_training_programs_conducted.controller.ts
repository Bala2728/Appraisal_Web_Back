import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactTrainingProgramsConductedService } from './fact_training_programs_conducted.service';
import { CreateFactTrainingProgramsConductedDto } from './dto/create-fact_training_programs_conducted.dto';
import { UpdateFactTrainingProgramsConductedDto } from './dto/update-fact_training_programs_conducted.dto';

@Controller('fact_training_programs_conducted')
export class FactTrainingProgramsConductedController {
  constructor(private readonly factTrainingProgramsConductedService: FactTrainingProgramsConductedService) {}

  @Post('create')
  create(@Body() createFactTrainingProgramsConductedDto: CreateFactTrainingProgramsConductedDto) {
    return this.factTrainingProgramsConductedService.create(createFactTrainingProgramsConductedDto);
  }

  @Get('findAll')
  findAll() {
    return this.factTrainingProgramsConductedService.findAll();
  }

  @Get('findOne')
  findOne(@Body('trainingProgramConductedId') id: string) {
    return this.factTrainingProgramsConductedService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactTrainingProgramsConductedDto: UpdateFactTrainingProgramsConductedDto) {
    return this.factTrainingProgramsConductedService.update(updateFactTrainingProgramsConductedDto);
  }

  @Delete('delete')
  remove(@Body('trainingProgramConductedId') id: string) {
    return this.factTrainingProgramsConductedService.remove(id);
  }
}
