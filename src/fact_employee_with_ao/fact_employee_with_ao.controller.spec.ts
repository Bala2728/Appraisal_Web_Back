import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeWithAoController } from './fact_employee_with_ao.controller';
import { FactEmployeeWithAoService } from './fact_employee_with_ao.service';

describe('FactEmployeeWithAoController', () => {
  let controller: FactEmployeeWithAoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeWithAoController],
      providers: [FactEmployeeWithAoService],
    }).compile();

    controller = module.get<FactEmployeeWithAoController>(FactEmployeeWithAoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
