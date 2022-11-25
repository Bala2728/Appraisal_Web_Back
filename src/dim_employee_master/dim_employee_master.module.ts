import { Module } from '@nestjs/common';
import { DimEmployeeMasterService } from './dim_employee_master.service';
import { DimEmployeeMasterController } from './dim_employee_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimEmployeeMaster } from './entities/dim_employee_master.entity';
import { DimBranchMaster } from './entities/dim_branch_master.entity';
import { DimDepartmentMaster } from './entities/dim_department_master.entity';
import { DimDesignationMaster } from './entities/dim_designation_master.entity';
import { DimEmployerTypeMaster } from './entities/dim_employer_type_master.entity';
import { DimGradeMaster } from './entities/dim_grade_master.entity';
import { DimRoleMaster } from './entities/dim_role_master.entity';
import { DimProjectManagerMaster } from './entities/dim_project_manager_master.entity';
import { DimReportingManagerMaster } from './entities/dim_reporting_manager_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([
    DimEmployeeMaster,
    DimBranchMaster,
    DimDepartmentMaster,
    DimDesignationMaster,
    DimEmployerTypeMaster,
    DimGradeMaster,
    DimRoleMaster,
    DimProjectManagerMaster,
    DimReportingManagerMaster
  ])],

  controllers: [DimEmployeeMasterController],
  providers: [DimEmployeeMasterService]
})
export class DimEmployeeMasterModule {}
