import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyNumericRatingService } from './fact_employee_competency_numeric_rating.service';

describe('FactEmployeeCompetencyNumericRatingService', () => {
  let service: FactEmployeeCompetencyNumericRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeCompetencyNumericRatingService],
    }).compile();

    service = module.get<FactEmployeeCompetencyNumericRatingService>(FactEmployeeCompetencyNumericRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
