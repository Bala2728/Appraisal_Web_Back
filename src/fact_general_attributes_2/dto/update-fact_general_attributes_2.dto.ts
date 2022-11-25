import { PartialType } from '@nestjs/swagger';
import { CreateFactGeneralAttributes2Dto } from './create-fact_general_attributes_2.dto';

export class UpdateFactGeneralAttributes2Dto extends PartialType(CreateFactGeneralAttributes2Dto) {
    factKeyCompetencyAreaId: string;
}
