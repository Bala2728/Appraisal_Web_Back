import { PartialType } from '@nestjs/mapped-types';
import { CreateFactEmployeeCompetencyAvgScoreRatingDto } from './create-fact_employee_competency_avg_score_rating.dto';

export class UpdateFactEmployeeCompetencyAvgScoreRatingDto extends PartialType(CreateFactEmployeeCompetencyAvgScoreRatingDto) {}
