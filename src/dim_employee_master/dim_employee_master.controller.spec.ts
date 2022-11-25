import { Test, TestingModule } from '@nestjs/testing';
import { DimEmployeeMasterController } from './dim_employee_master.controller';
import { DimEmployeeMasterService } from './dim_employee_master.service';

describe('DimEmployeeMasterController', () => {
  let controller: DimEmployeeMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimEmployeeMasterController],
      providers: [DimEmployeeMasterService],
    }).compile();

    controller = module.get<DimEmployeeMasterController>(DimEmployeeMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
