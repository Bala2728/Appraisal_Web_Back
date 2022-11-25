import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeCompetencyNumericRatingService } from './fact_employee_competency_numeric_rating.service';
import { CreateFactEmployeeCompetencyNumericRatingDto } from './dto/create-fact_employee_competency_numeric_rating.dto';
import { UpdateFactEmployeeCompetencyNumericRatingDto } from './dto/update-fact_employee_competency_numeric_rating.dto';

@Controller('fact_employee_competency_numeric_rating')
export class FactEmployeeCompetencyNumericRatingController {
  constructor(private readonly factEmployeeCompetencyNumericRatingService: FactEmployeeCompetencyNumericRatingService) {}

  @Post('create')
  create(@Body() createFactEmployeeCompetencyNumericRatingDto: CreateFactEmployeeCompetencyNumericRatingDto) {
    console.log("conteroller called");
    return this.factEmployeeCompetencyNumericRatingService.create(createFactEmployeeCompetencyNumericRatingDto);
  }


  @Get()
  findAll() {
    return this.factEmployeeCompetencyNumericRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factEmployeeCompetencyNumericRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactEmployeeCompetencyNumericRatingDto: UpdateFactEmployeeCompetencyNumericRatingDto) {
    return this.factEmployeeCompetencyNumericRatingService.update(+id, updateFactEmployeeCompetencyNumericRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factEmployeeCompetencyNumericRatingService.remove(+id);
  }
}
