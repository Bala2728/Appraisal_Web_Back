import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingProgramsAttendedController } from './fact_training_programs_attended.controller';
import { FactTrainingProgramsAttendedService } from './fact_training_programs_attended.service';

describe('FactTrainingProgramsAttendedController', () => {
  let controller: FactTrainingProgramsAttendedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactTrainingProgramsAttendedController],
      providers: [FactTrainingProgramsAttendedService],
    }).compile();

    controller = module.get<FactTrainingProgramsAttendedController>(FactTrainingProgramsAttendedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
