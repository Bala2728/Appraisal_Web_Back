import { Test, TestingModule } from '@nestjs/testing';
import { DimGeneralAttributesService } from './dim_general_attributes.service';

describe('DimGeneralAttributesService', () => {
  let service: DimGeneralAttributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimGeneralAttributesService],
    }).compile();

    service = module.get<DimGeneralAttributesService>(DimGeneralAttributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
