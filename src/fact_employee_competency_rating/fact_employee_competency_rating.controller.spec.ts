import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyRatingController } from './fact_employee_competency_rating.controller';
import { FactEmployeeCompetencyRatingService } from './fact_employee_competency_rating.service';

describe('FactEmployeeCompetencyRatingController', () => {
  let controller: FactEmployeeCompetencyRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeCompetencyRatingController],
      providers: [FactEmployeeCompetencyRatingService],
    }).compile();

    controller = module.get<FactEmployeeCompetencyRatingController>(FactEmployeeCompetencyRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
