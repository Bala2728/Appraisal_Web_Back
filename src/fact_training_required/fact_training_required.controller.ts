import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactTrainingRequiredService } from './fact_training_required.service';
import { CreateFactTrainingRequiredDto } from './dto/create-fact_training_required.dto';
import { UpdateFactTrainingRequiredDto } from './dto/update-fact_training_required.dto';

@Controller('fact_training_required')
export class FactTrainingRequiredController {
  constructor(private readonly factTrainingRequiredService: FactTrainingRequiredService) {}

  @Post('create')
  create(@Body() createFactTrainingRequiredDto: CreateFactTrainingRequiredDto) {
    return this.factTrainingRequiredService.create(createFactTrainingRequiredDto);
  }

  @Get('findAll')
  findAll() {
    return this.factTrainingRequiredService.findAll();
  }

  @Get('findOne')
  findOne(@Body('trainingRequiredId') id: string) {
    return this.factTrainingRequiredService.findOne(id);
  }

  @Post('update')
  update(@Body() updateFactTrainingRequiredDto: UpdateFactTrainingRequiredDto) {
    return this.factTrainingRequiredService.update(updateFactTrainingRequiredDto);
  }

  @Delete('delete')
  remove(@Body('trainingRequiredId') id: string) {
    return this.factTrainingRequiredService.remove(id);
  }
}
