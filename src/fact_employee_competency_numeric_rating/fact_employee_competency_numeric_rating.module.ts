import { Module } from '@nestjs/common';
import { FactEmployeeCompetencyNumericRatingService } from './fact_employee_competency_numeric_rating.service';
import { FactEmployeeCompetencyNumericRatingController } from './fact_employee_competency_numeric_rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactEmployeeCompetencyNumericRating } from './entities/fact_employee_competency_numeric_rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactEmployeeCompetencyNumericRating])],
  controllers: [FactEmployeeCompetencyNumericRatingController],
  providers: [FactEmployeeCompetencyNumericRatingService],
  exports : [FactEmployeeCompetencyNumericRatingService]
})
export class FactEmployeeCompetencyNumericRatingModule {}
