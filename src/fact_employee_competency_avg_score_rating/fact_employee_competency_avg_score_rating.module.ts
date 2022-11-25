import { Module } from '@nestjs/common';
import { FactEmployeeCompetencyAvgScoreRatingService } from './fact_employee_competency_avg_score_rating.service';
import { FactEmployeeCompetencyAvgScoreRatingController } from './fact_employee_competency_avg_score_rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactEmployeeCompetencyNumericRating } from '../fact_employee_competency_numeric_rating/entities/fact_employee_competency_numeric_rating.entity';
import { FactEmployeeCompetencyWeightedScoreRating } from '../fact_employee_competency_weighted_score_rating/entities/fact_employee_competency_weighted_score_rating.entity';
import {FactEmployeeCompetencyAvgScoreRating} from "./entities/fact_employee_competency_avg_score_rating.entity";

@Module({
  imports : [TypeOrmModule.forFeature([FactEmployeeCompetencyAvgScoreRating,FactEmployeeCompetencyNumericRating,FactEmployeeCompetencyWeightedScoreRating])],
  controllers: [FactEmployeeCompetencyAvgScoreRatingController],
  providers: [FactEmployeeCompetencyAvgScoreRatingService],
  exports : [FactEmployeeCompetencyAvgScoreRatingService]
})
export class FactEmployeeCompetencyAvgScoreRatingModule {}
