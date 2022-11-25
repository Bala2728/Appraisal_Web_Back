import { Module } from '@nestjs/common';
import { DimGeneralAttributesService } from './dim_general_attributes.service';
import { DimGeneralAttributesController } from './dim_general_attributes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimGeneralAttribute } from './entities/dim_general_attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DimGeneralAttribute])],
  controllers: [DimGeneralAttributesController],
  providers: [DimGeneralAttributesService]
})
export class DimGeneralAttributesModule {}
