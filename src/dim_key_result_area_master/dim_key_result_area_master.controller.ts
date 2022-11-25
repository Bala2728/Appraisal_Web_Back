import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DimKeyResultAreaMasterService } from './dim_key_result_area_master.service';
import { CreateDimKeyResultAreaMasterDto } from './dto/create-dim_key_result_area_master.dto';
import { UpdateDimKeyResultAreaMasterDto } from './dto/update-dim_key_result_area_master.dto';

@Controller('dim-key-result-area-master')
export class DimKeyResultAreaMasterController {
  constructor(private readonly dimKeyResultAreaMasterService: DimKeyResultAreaMasterService) {}

  @Post('create')
  create(@Body() createDimKeyResultAreaMasterDto: CreateDimKeyResultAreaMasterDto) {
    return this.dimKeyResultAreaMasterService.create(createDimKeyResultAreaMasterDto);
  }

  @Get('findAll')
  findAll() {
    return this.dimKeyResultAreaMasterService.findAll();
  }

  @Get('findOne')
  findOne(@Body('keyResultAreaId') id: string) {
    return this.dimKeyResultAreaMasterService.findOne(id);
  }

  @Post('update')
  update(@Body() updateDimKeyResultAreaMasterDto: UpdateDimKeyResultAreaMasterDto) {
    return this.dimKeyResultAreaMasterService.update(updateDimKeyResultAreaMasterDto);
  }

  @Delete('delete')
  remove(@Body('keyResultAreaId') id: string) {
    return this.dimKeyResultAreaMasterService.remove(id);
  }
}
