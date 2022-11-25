import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactTrainingProgramsAttendedDto } from './create-fact_training_programs_attended.dto';

export class UpdateFactTrainingProgramsAttendedDto extends PartialType(CreateFactTrainingProgramsAttendedDto) {
    @ApiProperty()
    trainingProgramAttendedId:string;
    @ApiProperty()
    updatedBy:string;
}
