import { Module } from '@nestjs/common';
import { FactTrainingProgramsConductedService } from './fact_training_programs_conducted.service';
import { FactTrainingProgramsConductedController } from './fact_training_programs_conducted.controller';
import { FactTrainingProgramsConducted } from './entities/fact_training_programs_conducted.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([FactTrainingProgramsConducted])],
  controllers: [FactTrainingProgramsConductedController],
  providers: [FactTrainingProgramsConductedService]
})
export class FactTrainingProgramsConductedModule {}
