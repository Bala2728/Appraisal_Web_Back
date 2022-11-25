import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DimGeneralAttributesService } from './dim_general_attributes.service';
import { CreateDimGeneralAttributeDto } from './dto/create-dim_general_attribute.dto';
import { UpdateDimGeneralAttributeDto } from './dto/update-dim_general_attribute.dto';

@Controller('dim-general-attributes')
export class DimGeneralAttributesController {
  constructor(
    private readonly dimGeneralAttributesService: DimGeneralAttributesService,
  ) {}

  @Post('create')
  create(@Body() createDimGeneralAttributeDto: CreateDimGeneralAttributeDto) {
    return this.dimGeneralAttributesService.create(
      createDimGeneralAttributeDto,
    );
  }

  @Get('findAll')
  findAll() {
    return this.dimGeneralAttributesService.findAll();
  }

  @Get('findOne')
  findOne(@Body('keyCompetencyAreaId') id: string) {
    return this.dimGeneralAttributesService.findOne(id);
  }

  @Post('update')
  update(@Body() updateDimGeneralAttributeDto: UpdateDimGeneralAttributeDto) {
    return this.dimGeneralAttributesService.update(
      updateDimGeneralAttributeDto,
    );
  }

  @Delete('delete')
  remove(@Body('keyCompetencyAreaId') id: string) {
    return this.dimGeneralAttributesService.remove(id);
  }
}
