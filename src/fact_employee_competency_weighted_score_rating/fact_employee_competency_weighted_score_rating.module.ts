import { Module } from '@nestjs/common';
import { FactEmployeeCompetencyWeightedScoreRatingService } from './fact_employee_competency_weighted_score_rating.service';
import { FactEmployeeCompetencyWeightedScoreRatingController } from './fact_employee_competency_weighted_score_rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FactEmployeeCompetencyNumericRating } from '../fact_employee_competency_numeric_rating/entities/fact_employee_competency_numeric_rating.entity';
import { FactEmployeeCompetencyWeightedScoreRating } from './entities/fact_employee_competency_weighted_score_rating.entity';

@Module({
  imports : [TypeOrmModule.forFeature([FactEmployeeCompetencyNumericRating,FactEmployeeCompetencyWeightedScoreRating])],
  controllers: [FactEmployeeCompetencyWeightedScoreRatingController],
  providers: [FactEmployeeCompetencyWeightedScoreRatingService],
  exports : [FactEmployeeCompetencyWeightedScoreRatingService]
})
export class FactEmployeeCompetencyWeightedScoreRatingModule {}
