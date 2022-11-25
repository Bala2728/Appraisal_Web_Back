import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyNumericRatingController } from './fact_employee_competency_numeric_rating.controller';
import { FactEmployeeCompetencyNumericRatingService } from './fact_employee_competency_numeric_rating.service';

describe('FactEmployeeCompetencyNumericRatingController', () => {
  let controller: FactEmployeeCompetencyNumericRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeCompetencyNumericRatingController],
      providers: [FactEmployeeCompetencyNumericRatingService],
    }).compile();

    controller = module.get<FactEmployeeCompetencyNumericRatingController>(FactEmployeeCompetencyNumericRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
