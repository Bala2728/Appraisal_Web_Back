import { Test, TestingModule } from '@nestjs/testing';
import { DimGeneralAttributesController } from './dim_general_attributes.controller';
import { DimGeneralAttributesService } from './dim_general_attributes.service';

describe('DimGeneralAttributesController', () => {
  let controller: DimGeneralAttributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimGeneralAttributesController],
      providers: [DimGeneralAttributesService],
    }).compile();

    controller = module.get<DimGeneralAttributesController>(DimGeneralAttributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
