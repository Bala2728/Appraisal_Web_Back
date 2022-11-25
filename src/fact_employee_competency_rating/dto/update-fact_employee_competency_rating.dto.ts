import { PartialType } from '@nestjs/mapped-types';
import { CreateFactEmployeeCompetencyRatingDto } from './create-fact_employee_competency_rating.dto';

export class UpdateFactEmployeeCompetencyRatingDto extends PartialType(CreateFactEmployeeCompetencyRatingDto) {
    employeeCompetencyId:string;
    updatedBy:string;
    
}
