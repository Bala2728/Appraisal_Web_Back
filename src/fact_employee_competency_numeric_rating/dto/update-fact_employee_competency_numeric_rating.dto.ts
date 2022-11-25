import { PartialType } from '@nestjs/mapped-types';
import { CreateFactEmployeeCompetencyNumericRatingDto } from './create-fact_employee_competency_numeric_rating.dto';

export class UpdateFactEmployeeCompetencyNumericRatingDto extends PartialType(CreateFactEmployeeCompetencyNumericRatingDto) {}
