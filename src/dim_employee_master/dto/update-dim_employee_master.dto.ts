import { PartialType } from '@nestjs/swagger';
import { CreateDimEmployeeMasterDto } from './create-dim_employee_master.dto';

export class UpdateDimEmployeeMasterDto extends PartialType(CreateDimEmployeeMasterDto) {}
