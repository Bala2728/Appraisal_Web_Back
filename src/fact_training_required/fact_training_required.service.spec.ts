import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingRequiredService } from './fact_training_required.service';

describe('FactTrainingRequiredService', () => {
  let service: FactTrainingRequiredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactTrainingRequiredService],
    }).compile();

    service = module.get<FactTrainingRequiredService>(FactTrainingRequiredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
