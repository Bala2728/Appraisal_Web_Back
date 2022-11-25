import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyRatingService } from './fact_employee_competency_rating.service';

describe('FactEmployeeCompetencyRatingService', () => {
  let service: FactEmployeeCompetencyRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeCompetencyRatingService],
    }).compile();

    service = module.get<FactEmployeeCompetencyRatingService>(FactEmployeeCompetencyRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
