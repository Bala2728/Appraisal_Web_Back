import { Test, TestingModule } from '@nestjs/testing';
import { FactKeyResultAreaController } from './fact_key_result_area.controller';
import { FactKeyResultAreaService } from './fact_key_result_area.service';

describe('FactKeyResultAreaController', () => {
  let controller: FactKeyResultAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactKeyResultAreaController],
      providers: [FactKeyResultAreaService],
    }).compile();

    controller = module.get<FactKeyResultAreaController>(FactKeyResultAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
