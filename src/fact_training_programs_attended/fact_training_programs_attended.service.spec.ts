import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingProgramsAttendedService } from './fact_training_programs_attended.service';

describe('FactTrainingProgramsAttendedService', () => {
  let service: FactTrainingProgramsAttendedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactTrainingProgramsAttendedService],
    }).compile();

    service = module.get<FactTrainingProgramsAttendedService>(FactTrainingProgramsAttendedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
