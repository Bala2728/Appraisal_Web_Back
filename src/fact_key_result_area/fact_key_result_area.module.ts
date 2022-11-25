import { Module } from '@nestjs/common';
import { FactKeyResultAreaService } from './fact_key_result_area.service';
import { FactKeyResultAreaController } from './fact_key_result_area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactKeyResultArea } from './entities/fact_key_result_area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactKeyResultArea])],
  controllers: [FactKeyResultAreaController],
  providers: [FactKeyResultAreaService]
})
export class FactKeyResultAreaModule {}
