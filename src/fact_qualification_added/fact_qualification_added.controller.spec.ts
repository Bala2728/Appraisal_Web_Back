import { Test, TestingModule } from '@nestjs/testing';
import { FactQualificationAddedController } from './fact_qualification_added.controller';
import { FactQualificationAddedService } from './fact_qualification_added.service';

describe('FactQualificationAddedController', () => {
  let controller: FactQualificationAddedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactQualificationAddedController],
      providers: [FactQualificationAddedService],
    }).compile();

    controller = module.get<FactQualificationAddedController>(FactQualificationAddedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
