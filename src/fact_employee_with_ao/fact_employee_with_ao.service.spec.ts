import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeWithAoService } from './fact_employee_with_ao.service';

describe('FactEmployeeWithAoService', () => {
  let service: FactEmployeeWithAoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeWithAoService],
    }).compile();

    service = module.get<FactEmployeeWithAoService>(FactEmployeeWithAoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
