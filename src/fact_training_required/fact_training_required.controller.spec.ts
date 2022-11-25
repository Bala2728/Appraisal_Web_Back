import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingRequiredController } from './fact_training_required.controller';
import { FactTrainingRequiredService } from './fact_training_required.service';

describe('FactTrainingRequiredController', () => {
  let controller: FactTrainingRequiredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactTrainingRequiredController],
      providers: [FactTrainingRequiredService],
    }).compile();

    controller = module.get<FactTrainingRequiredController>(FactTrainingRequiredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
