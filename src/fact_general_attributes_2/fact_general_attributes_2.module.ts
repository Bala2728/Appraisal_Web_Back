import { Module } from '@nestjs/common';
import { FactGeneralAttributes2Service } from './fact_general_attributes_2.service';
import { FactGeneralAttributes2Controller } from './fact_general_attributes_2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactGeneralAttributes2 } from './entities/fact_general_attributes_2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactGeneralAttributes2])],
  controllers: [FactGeneralAttributes2Controller],
  providers: [FactGeneralAttributes2Service]
})
export class FactGeneralAttributes2Module {}
