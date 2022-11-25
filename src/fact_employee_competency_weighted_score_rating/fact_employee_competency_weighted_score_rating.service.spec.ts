import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyWeightedScoreRatingService } from './fact_employee_competency_weighted_score_rating.service';

describe('FactEmployeeCompetencyWeightedScoreRatingService', () => {
  let service: FactEmployeeCompetencyWeightedScoreRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeCompetencyWeightedScoreRatingService],
    }).compile();

    service = module.get<FactEmployeeCompetencyWeightedScoreRatingService>(FactEmployeeCompetencyWeightedScoreRatingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
