import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactEmployeeWithRoDto } from './create-fact_employee_with_ro.dto';

export class UpdateFactEmployeeWithRoDto extends PartialType(CreateFactEmployeeWithRoDto) {
    @ApiProperty()
    reviewingOfficerId:string;
    @ApiProperty()
    updatedBy:string;
}
