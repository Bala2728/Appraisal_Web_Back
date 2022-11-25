import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactTrainingProgramsAttendedService } from './fact_training_programs_attended.service';
import { CreateFactTrainingProgramsAttendedDto } from './dto/create-fact_training_programs_attended.dto';
import { UpdateFactTrainingProgramsAttendedDto } from './dto/update-fact_training_programs_attended.dto';

@Controller('fact_training_programs_attended')
export class FactTrainingProgramsAttendedController {
  constructor(private readonly factTrainingProgramsAttendedService: FactTrainingProgramsAttendedService) {}

  @Post('create')
  create(@Body() createFactTrainingProgramsAttendedDto: CreateFactTrainingProgramsAttendedDto) {
    return this.factTrainingProgramsAttendedService.create(createFactTrainingProgramsAttendedDto);
  }

  @Get('findAll')
  findAll() {
    return this.factTrainingProgramsAttendedService.findAll();
  }

  @Get('findOne')
  findOne(@Body('trainingProgramAttendedId') id: string) {
    return this.factTrainingProgramsAttendedService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactTrainingProgramsAttendedDto: UpdateFactTrainingProgramsAttendedDto) {
    return this.factTrainingProgramsAttendedService.update(updateFactTrainingProgramsAttendedDto);
  }

  @Delete('delete')
  remove(@Body('trainingProgramAttendedId') id: string) {
    return this.factTrainingProgramsAttendedService.remove(id);
  }
}
