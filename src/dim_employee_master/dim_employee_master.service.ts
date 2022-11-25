import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDimEmployeeMasterDto } from './dto/create-dim_employee_master.dto';
import { UpdateDimEmployeeMasterDto } from './dto/update-dim_employee_master.dto';
import { DimBranchMaster } from './entities/dim_branch_master.entity';
import { DimDepartmentMaster } from './entities/dim_department_master.entity';
import { DimDesignationMaster } from './entities/dim_designation_master.entity';
import { DimEmployeeMaster } from './entities/dim_employee_master.entity';
import { DimEmployerTypeMaster } from './entities/dim_employer_type_master.entity';
import { DimGradeMaster } from './entities/dim_grade_master.entity';
import { DimProjectManagerMaster } from './entities/dim_project_manager_master.entity';
import { DimReportingManagerMaster } from './entities/dim_reporting_manager_master.entity';
import { DimRoleMaster } from './entities/dim_role_master.entity';

@Injectable()
export class DimEmployeeMasterService {
  constructor(
    @InjectRepository(DimEmployeeMaster)
    private dimEmployeeMasterRepository: Repository<DimEmployeeMaster>,
    @InjectRepository(DimBranchMaster)
    private dimBranchMasterRepository: Repository<DimBranchMaster>,
    @InjectRepository(DimDepartmentMaster)
    private dimDepartmentMasterRepository: Repository<DimDepartmentMaster>,
    @InjectRepository(DimDesignationMaster)
    private dimDesignationMasterRepository: Repository<DimDesignationMaster>,
    @InjectRepository(DimEmployerTypeMaster)
    private dimEmployerTypeMasterRepository: Repository<DimEmployerTypeMaster>,
    @InjectRepository(DimGradeMaster)
    private dimGradeMasterRepository: Repository<DimGradeMaster>,
    @InjectRepository(DimRoleMaster)
    private dimRoleMasterRepository: Repository<DimRoleMaster>,
    @InjectRepository(DimProjectManagerMaster)
    private dimProjectManagerMasterRepository: Repository<DimProjectManagerMaster>,
    @InjectRepository(DimReportingManagerMaster)
    private dimReportingManagerMasterRepository: Repository<DimReportingManagerMaster>,
  ) {}

  async findBranchMaster() {
    let get_branch_type = await this.dimBranchMasterRepository
      .createQueryBuilder('branch')
      .select(['branch.branch_name'])
      .execute();

    return get_branch_type;
  }

  async findDepartmentMaster() {
    let get_department = await this.dimDepartmentMasterRepository
      .createQueryBuilder('department')
      .select([
        'department.department_name'])
      .execute(); 

    return get_department;
  }

  async findDesignationMaster() {
    let get_Designation = await this.dimDesignationMasterRepository
      .createQueryBuilder('designation')
      .select([
        'designation.designation_name'])
      .execute();

    return get_Designation;
  }

  async findEmployerTypeMaster() {
    let get_employerType = await this.dimEmployerTypeMasterRepository
      .createQueryBuilder('employerType')
      .select([
        'employerType.employer_type' ])
      .execute();

    return get_employerType;
  }

  async findDimGradeMaster() {
    let get_grade = await this.dimGradeMasterRepository
      .createQueryBuilder('grade')
      .select(['grade.grade_type'])
      .execute();

    return get_grade;
  }

  async findDimRoleMaster() {
    let get_role = await this.dimRoleMasterRepository
      .createQueryBuilder('role')
      .select(['role.role_name'])
      .execute();

    return get_role;
  }

  async findDimProjectManagerMaster(){
    let project_manager=await this.dimProjectManagerMasterRepository
    .createQueryBuilder('project_manager')
    .select(['project_manager.project_manager_name'])
    .execute()
    return project_manager;
  }

  async findDimReportingManagerMaster(){ 
  let reporting_manager=await this.dimReportingManagerMasterRepository
  .createQueryBuilder('reporting_manager')
  .select(['reporting_manager.reporting_manager_name'])
  .execute()
  return reporting_manager
  }
  //     create(createDimEmployeeMasterDto: CreateDimEmployeeMasterDto) {
  //   return 'This action adds a new dimEmployeeMaster';
  // }

  // findAll() {
  //   return `This action returns all dimEmployeeMaster`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} dimEmployeeMaster`;
  // }

  // update(id: number, updateDimEmployeeMasterDto: UpdateDimEmployeeMasterDto) {
  //   return `This action updates a #${id} dimEmployeeMaster`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} dimEmployeeMaster`;
  // }
}
