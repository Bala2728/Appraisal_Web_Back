import { Test, TestingModule } from '@nestjs/testing';
import { FactTrainingProgramsConductedController } from './fact_training_programs_conducted.controller';
import { FactTrainingProgramsConductedService } from './fact_training_programs_conducted.service';

describe('FactTrainingProgramsConductedController', () => {
  let controller: FactTrainingProgramsConductedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactTrainingProgramsConductedController],
      providers: [FactTrainingProgramsConductedService],
    }).compile();

    controller = module.get<FactTrainingProgramsConductedController>(FactTrainingProgramsConductedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
