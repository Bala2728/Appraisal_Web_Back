import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeWithRoService } from './fact_employee_with_ro.service';

describe('FactEmployeeWithRoService', () => {
  let service: FactEmployeeWithRoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactEmployeeWithRoService],
    }).compile();

    service = module.get<FactEmployeeWithRoService>(FactEmployeeWithRoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
