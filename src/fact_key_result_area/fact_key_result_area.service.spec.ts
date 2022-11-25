import { Test, TestingModule } from '@nestjs/testing';
import { FactKeyResultAreaService } from './fact_key_result_area.service';

describe('FactKeyResultAreaService', () => {
  let service: FactKeyResultAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactKeyResultAreaService],
    }).compile();

    service = module.get<FactKeyResultAreaService>(FactKeyResultAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
