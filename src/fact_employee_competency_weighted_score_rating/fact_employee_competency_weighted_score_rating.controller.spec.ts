import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyWeightedScoreRatingController } from './fact_employee_competency_weighted_score_rating.controller';
import { FactEmployeeCompetencyWeightedScoreRatingService } from './fact_employee_competency_weighted_score_rating.service';

describe('FactEmployeeCompetencyWeightedScoreRatingController', () => {
  let controller: FactEmployeeCompetencyWeightedScoreRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeCompetencyWeightedScoreRatingController],
      providers: [FactEmployeeCompetencyWeightedScoreRatingService],
    }).compile();

    controller = module.get<FactEmployeeCompetencyWeightedScoreRatingController>(FactEmployeeCompetencyWeightedScoreRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
