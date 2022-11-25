import { Test, TestingModule } from '@nestjs/testing';
import { FactEmployeeWithRoController } from './fact_employee_with_ro.controller';
import { FactEmployeeWithRoService } from './fact_employee_with_ro.service';

describe('FactEmployeeWithRoController', () => {
  let controller: FactEmployeeWithRoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactEmployeeWithRoController],
      providers: [FactEmployeeWithRoService],
    }).compile();

    controller = module.get<FactEmployeeWithRoController>(FactEmployeeWithRoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
