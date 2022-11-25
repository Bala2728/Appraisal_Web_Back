import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactEmployeeCompetencyRatingService } from './fact_employee_competency_rating.service';
import { CreateFactEmployeeCompetencyRatingDto } from './dto/create-fact_employee_competency_rating.dto';
import { UpdateFactEmployeeCompetencyRatingDto } from './dto/update-fact_employee_competency_rating.dto';
import { CompetencyDto } from './dto/compentency.dto';

@Controller('fact_employee_competency_rating')
export class FactEmployeeCompetencyRatingController {
  constructor(private readonly factEmployeeCompetencyRatingService: FactEmployeeCompetencyRatingService) {}


  @Post("final")
  final (@Body() CreateFactEmployeeCompetencyNumericRatingDto : CompetencyDto){
    return this.factEmployeeCompetencyRatingService.factEmployeeCompetencyRatingService(CreateFactEmployeeCompetencyNumericRatingDto)
  }
}
  // @Post('employeeOwnershipRating')
  // employeeOwnershipRating(@Body()competencyDto:CompetencyDto) {
  //   return this.factEmployeeCompetencyRatingService.employeeOwnershipRating(competencyDto);
  // }
  // @Post('employeeResourcefullnessRating')
  // employeeResourcefullnessRating(@Body()competencyDto:CompetencyDto) {
  //   return this.factEmployeeCompetencyRatingService.employeeResourcefullnessRating(competencyDto);
  // }
  // @Post('employeeResponsivenessRating')
  // employeeResponsivenessRating(@Body()competencyDto:CompetencyDto) {
  //   return this.factEmployeeCompetencyRatingService.employeeResponsivenessRating(competencyDto);
  // }
  // @Post('employeePunctualityRating')
  // employeePunctualityRating(@Body()competencyDto:CompetencyDto) {
  //   return this.factEmployeeCompetencyRatingService.employeePunctualityRating(competencyDto);
  // }

  // @Post('employeeAttendanceRating')
  // employeeAttendanceRating(@Body()competencyDto:CompetencyDto) {
  //   return this.factEmployeeCompetencyRatingService.employeeAttendanceRating(competencyDto);
  // }

  // @Get()
  // findAll() {
  //   return this.factEmployeeCompetencyRatingService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.factEmployeeCompetencyRatingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFactEmployeeCompetencyRatingDto: UpdateFactEmployeeCompetencyRatingDto) {
  //   return this.factEmployeeCompetencyRatingService.update(+id, updateFactEmployeeCompetencyRatingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.factEmployeeCompetencyRatingService.remove(+id);
  // }

