import { Test, TestingModule } from '@nestjs/testing';
import { FactQualificationAddedService } from './fact_qualification_added.service';

describe('FactQualificationAddedService', () => {
  let service: FactQualificationAddedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactQualificationAddedService],
    }).compile();

    service = module.get<FactQualificationAddedService>(FactQualificationAddedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
