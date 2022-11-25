import { Test, TestingModule } from '@nestjs/testing';
import { DimKeyResultAreaMasterController } from './dim_key_result_area_master.controller';
import { DimKeyResultAreaMasterService } from './dim_key_result_area_master.service';

describe('DimKeyResultAreaMasterController', () => {
  let controller: DimKeyResultAreaMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimKeyResultAreaMasterController],
      providers: [DimKeyResultAreaMasterService],
    }).compile();

    controller = module.get<DimKeyResultAreaMasterController>(DimKeyResultAreaMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
