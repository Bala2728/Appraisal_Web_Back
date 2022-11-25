import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyAvgScoreRatingService } from './fact_employee_competency_avg_score_rating.service';

describe('FactEmployeeCompetencyAvgScoreRatingService', () => {
  let service: FactEmployeeCompetencyAvgScoreRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeCompetencyAvgScoreRatingService],
    }).compile();

    service = module.get<FactEmployeeCompetencyAvgScoreRatingService>(FactEmployeeCompetencyAvgScoreRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
