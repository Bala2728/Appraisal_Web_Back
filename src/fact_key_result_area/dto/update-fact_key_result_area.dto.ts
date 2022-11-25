import { PartialType } from '@nestjs/swagger';
import { CreateFactKeyResultAreaDto } from './create-fact_key_result_area.dto';

export class UpdateFactKeyResultAreaDto extends PartialType(CreateFactKeyResultAreaDto) {
    factKeyResultAreaId:string
}
