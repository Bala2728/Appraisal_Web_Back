import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDimKeyResultAreaMasterDto } from './create-dim_key_result_area_master.dto';

export class UpdateDimKeyResultAreaMasterDto extends PartialType(
  CreateDimKeyResultAreaMasterDto,
) {
  keyResultAreaId: string;
  @ApiProperty()
  updatedBy: string;
}
