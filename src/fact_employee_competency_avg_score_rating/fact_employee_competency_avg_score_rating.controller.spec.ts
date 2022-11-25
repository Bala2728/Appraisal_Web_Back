import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeCompetencyAvgScoreRatingController } from './fact_employee_competency_avg_score_rating.controller';
import { FactEmployeeCompetencyAvgScoreRatingService } from './fact_employee_competency_avg_score_rating.service';

describe('FactEmployeeCompetencyAvgScoreRatingController', () => {
  let controller: FactEmployeeCompetencyAvgScoreRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeCompetencyAvgScoreRatingController],
      providers: [FactEmployeeCompetencyAvgScoreRatingService],
    }).compile();

    controller = module.get<FactEmployeeCompetencyAvgScoreRatingController>(FactEmployeeCompetencyAvgScoreRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
