import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactTrainingProgramsConductedDto } from './create-fact_training_programs_conducted.dto';

export class UpdateFactTrainingProgramsConductedDto extends PartialType(CreateFactTrainingProgramsConductedDto) {
    @ApiProperty()
    trainingProgramConductedId:string; 
    @ApiProperty()
    updatedBy:string;
}
