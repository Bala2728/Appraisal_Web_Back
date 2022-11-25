import { Module } from '@nestjs/common';
import { FactEmployeeWithRoService } from './fact_employee_with_ro.service';
import { FactEmployeeWithRoController } from './fact_employee_with_ro.controller';
import { FactEmployeeWithRo } from './entities/fact_employee_with_ro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([FactEmployeeWithRo])],
  controllers: [FactEmployeeWithRoController],
  providers: [FactEmployeeWithRoService]
})
export class FactEmployeeWithRoModule {}
