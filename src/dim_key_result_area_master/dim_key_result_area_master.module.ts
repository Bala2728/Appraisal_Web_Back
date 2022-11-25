import { Module } from '@nestjs/common';
import { DimKeyResultAreaMasterService } from './dim_key_result_area_master.service';
import { DimKeyResultAreaMasterController } from './dim_key_result_area_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimKeyResultAreaMaster } from './entities/dim_key_result_area_master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DimKeyResultAreaMaster])],
  controllers: [DimKeyResultAreaMasterController],
  providers: [DimKeyResultAreaMasterService],
})
export class DimKeyResultAreaMasterModule {}
