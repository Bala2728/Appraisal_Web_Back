import { Test, TestingModule } from '@nestjs/testing';
import { DimKeyResultAreaMasterService } from './dim_key_result_area_master.service';

describe('DimKeyResultAreaMasterService', () => {
  let service: DimKeyResultAreaMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimKeyResultAreaMasterService],
    }).compile();

    service = module.get<DimKeyResultAreaMasterService>(DimKeyResultAreaMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
