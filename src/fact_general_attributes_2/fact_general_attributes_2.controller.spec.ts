import { Test, TestingModule } from '@nestjs/testing';
import { FactGeneralAttributes2Controller } from './fact_general_attributes_2.controller';
import { FactGeneralAttributes2Service } from './fact_general_attributes_2.service';

describe('FactGeneralAttributes2Controller', () => {
  let controller: FactGeneralAttributes2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactGeneralAttributes2Controller],
      providers: [FactGeneralAttributes2Service],
    }).compile();

    controller = module.get<FactGeneralAttributes2Controller>(FactGeneralAttributes2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
