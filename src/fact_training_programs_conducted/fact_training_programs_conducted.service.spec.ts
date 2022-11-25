import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingProgramsConductedService } from './fact_training_programs_conducted.service';

describe('FactTrainingProgramsConductedService', () => {
  let service: FactTrainingProgramsConductedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactTrainingProgramsConductedService],
    }).compile();

    service = module.get<FactTrainingProgramsConductedService>(FactTrainingProgramsConductedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
