import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateFactTrainingRequiredDto } from './create-fact_training_required.dto';

export class UpdateFactTrainingRequiredDto extends PartialType(
  CreateFactTrainingRequiredDto,
) {
  trainingRequiredId: string;
  @ApiProperty()
  updatedBy: string;
}
