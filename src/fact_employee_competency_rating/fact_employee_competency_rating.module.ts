import { Module } from '@nestjs/common';
import { FactEmployeeCompetencyRatingService } from './fact_employee_competency_rating.service';
import { FactEmployeeCompetencyRatingController } from './fact_employee_competency_rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactEmployeeCompetencyRating } from './entities/fact_employee_competency_rating.entity';
import { DimCompetencyMaster } from './entities/dim_competency_master.entity';
import { FactEmployeeCompetencyAvgScoreRatingModule } from '../fact_employee_competency_avg_score_rating/fact_employee_competency_avg_score_rating.module';
import { FactEmployeeCompetencyNumericRatingModule } from '../fact_employee_competency_numeric_rating/fact_employee_competency_numeric_rating.module';
import { FactEmployeeCompetencyWeightedScoreRatingModule } from '../fact_employee_competency_weighted_score_rating/fact_employee_competency_weighted_score_rating.module';

@Module({
  imports: [FactEmployeeCompetencyAvgScoreRatingModule,FactEmployeeCompetencyNumericRatingModule,FactEmployeeCompetencyWeightedScoreRatingModule],
  controllers: [FactEmployeeCompetencyRatingController],
  providers: [FactEmployeeCompetencyRatingService]
})
export class FactEmployeeCompetencyRatingModule {}
