import { PartialType } from '@nestjs/mapped-types';
import { CreateFactEmployeeCompetencyWeightedScoreRatingDto } from './create-fact_employee_competency_weighted_score_rating.dto';

export class UpdateFactEmployeeCompetencyWeightedScoreRatingDto extends PartialType(CreateFactEmployeeCompetencyWeightedScoreRatingDto) {}
