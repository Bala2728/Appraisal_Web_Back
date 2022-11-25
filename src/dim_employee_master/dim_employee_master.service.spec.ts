import { Test, TestingModule } from '@nestjs/testing';
import { DimEmployeeMasterService } from './dim_employee_master.service';

describe('DimEmployeeMasterService', () => {
  let service: DimEmployeeMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimEmployeeMasterService],
    }).compile();

    service = module.get<DimEmployeeMasterService>(DimEmployeeMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
