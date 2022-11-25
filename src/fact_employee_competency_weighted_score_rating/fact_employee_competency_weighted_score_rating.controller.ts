import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeCompetencyWeightedScoreRatingService } from './fact_employee_competency_weighted_score_rating.service';
import { CreateFactEmployeeCompetencyWeightedScoreRatingDto } from './dto/create-fact_employee_competency_weighted_score_rating.dto';
import { UpdateFactEmployeeCompetencyWeightedScoreRatingDto } from './dto/update-fact_employee_competency_weighted_score_rating.dto';

@Controller('fact-employee-competency-weighted-score-rating')
export class FactEmployeeCompetencyWeightedScoreRatingController {
  constructor(private readonly factEmployeeCompetencyWeightedScoreRatingService: FactEmployeeCompetencyWeightedScoreRatingService) {}

  @Post("create")
  create(@Body() createFactEmployeeCompetencyWeightedScoreRatingDto: CreateFactEmployeeCompetencyWeightedScoreRatingDto) {
    return this.factEmployeeCompetencyWeightedScoreRatingService.create(createFactEmployeeCompetencyWeightedScoreRatingDto);
  }

  @Get()
  findAll() {
    return this.factEmployeeCompetencyWeightedScoreRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factEmployeeCompetencyWeightedScoreRatingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactEmployeeCompetencyWeightedScoreRatingDto: UpdateFactEmployeeCompetencyWeightedScoreRatingDto) {
    return this.factEmployeeCompetencyWeightedScoreRatingService.update(+id, updateFactEmployeeCompetencyWeightedScoreRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factEmployeeCompetencyWeightedScoreRatingService.remove(+id);
  }
}
