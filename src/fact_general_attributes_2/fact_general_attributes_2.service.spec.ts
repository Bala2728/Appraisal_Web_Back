import { Test, TestingModule } from '@nestjs/testing';
import { FactGeneralAttributes2Service } from './fact_general_attributes_2.service';

describe('FactGeneralAttributes2Service', () => {
  let service: FactGeneralAttributes2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactGeneralAttributes2Service],
    }).compile();

    service = module.get<FactGeneralAttributes2Service>(FactGeneralAttributes2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
