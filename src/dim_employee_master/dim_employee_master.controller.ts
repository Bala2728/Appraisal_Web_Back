import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimEmployeeMasterService } from './dim_employee_master.service';
import { CreateDimEmployeeMasterDto } from './dto/create-dim_employee_master.dto';
import { UpdateDimEmployeeMasterDto } from './dto/update-dim_employee_master.dto';

@Controller('dim_employee_master')
export class DimEmployeeMasterController {
  constructor(private readonly dimEmployeeMasterService: DimEmployeeMasterService) {}


  @Get('findBranchMaster')
  findBranchMaster(){
    return this.dimEmployeeMasterService.findBranchMaster();
  }
   
  @Get('findDepartmentMaster')
  findDepartmentMaster(){
    return this.dimEmployeeMasterService.findDepartmentMaster();
  }
  
  @Get('findDesignationMaster')
  findDesignationMaster(){
    return this.dimEmployeeMasterService.findDesignationMaster();
  }
  @Get('findEmployerTypeMaster')
  findEmployerTypeMaster(){
    return this.dimEmployeeMasterService.findEmployerTypeMaster();
  }
  
  @Get('findDimGradeMaster')
  findDimGradeMaster(){
    return this.dimEmployeeMasterService.findDimGradeMaster();
  }

  @Get('findDimRoleMaster')
  findDimRoleMaster(){
    return this.dimEmployeeMasterService.findDimRoleMaster();
  }
  @Get('findDimProjectManagerMaster')
  findDimProjectManagerMaster(){
    return this.dimEmployeeMasterService.findDimProjectManagerMaster();
  }

  @Get('findDimReportingManagerMaster')
  findDimReportingManagerMaster(){
    return this.dimEmployeeMasterService.findDimReportingManagerMaster();
  }
  


   
   

  // @Post()
  // create(@Body() createDimEmployeeMasterDto: CreateDimEmployeeMasterDto) {
  //   return this.dimEmployeeMasterService.create(createDimEmployeeMasterDto);
  // }

  // @Get()
  // findAll() {
  //   return this.dimEmployeeMasterService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dimEmployeeMasterService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDimEmployeeMasterDto: UpdateDimEmployeeMasterDto) {
  //   return this.dimEmployeeMasterService.update(+id, updateDimEmployeeMasterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dimEmployeeMasterService.remove(+id);
  // }
}
