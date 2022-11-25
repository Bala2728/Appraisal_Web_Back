import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeCompetencyAvgScoreRatingService } from './fact_employee_competency_avg_score_rating.service';
import { CreateFactEmployeeCompetencyAvgScoreRatingDto } from './dto/create-fact_employee_competency_avg_score_rating.dto';
import { UpdateFactEmployeeCompetencyAvgScoreRatingDto } from './dto/update-fact_employee_competency_avg_score_rating.dto';

@Controller('fact-employee-competency-avg-score-rating')
export class FactEmployeeCompetencyAvgScoreRatingController {
  constructor(private readonly factEmployeeCompetencyAvgScoreRatingService: FactEmployeeCompetencyAvgScoreRatingService) {}

  @Post('create')
  create(@Body() createFactEmployeeCompetencyAvgScoreRatingDto: CreateFactEmployeeCompetencyAvgScoreRatingDto) {
    return this.factEmployeeCompetencyAvgScoreRatingService.create(createFactEmployeeCompetencyAvgScoreRatingDto);
  }

  @Get()
  findAll() {
    return this.factEmployeeCompetencyAvgScoreRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factEmployeeCompetencyAvgScoreRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactEmployeeCompetencyAvgScoreRatingDto: UpdateFactEmployeeCompetencyAvgScoreRatingDto) {
    return this.factEmployeeCompetencyAvgScoreRatingService.update(+id, updateFactEmployeeCompetencyAvgScoreRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factEmployeeCompetencyAvgScoreRatingService.remove(+id);
  }
}
