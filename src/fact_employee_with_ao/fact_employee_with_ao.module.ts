import { Module } from '@nestjs/common';
import { FactEmployeeWithAoService } from './fact_employee_with_ao.service';
import { FactEmployeeWithAoController } from './fact_employee_with_ao.controller';
import { FactEmployeeWithAo } from './entities/fact_employee_with_ao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactEmployeeWithRo } from 'src/fact_employee_with_ro/entities/fact_employee_with_ro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FactEmployeeWithAo,FactEmployeeWithRo])],
  controllers: [FactEmployeeWithAoController],
  providers: [FactEmployeeWithAoService]
})
export class FactEmployeeWithAoModule {}
