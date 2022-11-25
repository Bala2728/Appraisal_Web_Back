import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactEmployeeWithAoDto } from './create-fact_employee_with_ao.dto';

export class UpdateFactEmployeeWithAoDto extends PartialType(CreateFactEmployeeWithAoDto) {
    @ApiProperty()
    appraisingOfficerId:string;
    @ApiProperty()
    updatedBy:string;
    
}
