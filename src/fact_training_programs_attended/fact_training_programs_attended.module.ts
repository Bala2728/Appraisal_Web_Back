import { Module } from '@nestjs/common';
import { FactTrainingProgramsAttendedService } from './fact_training_programs_attended.service';
import { FactTrainingProgramsAttendedController } from './fact_training_programs_attended.controller';
import { FactTrainingProgramsAttended } from './entities/fact_training_programs_attended.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([FactTrainingProgramsAttended])],
  controllers: [FactTrainingProgramsAttendedController],
  providers: [FactTrainingProgramsAttendedService]
})
export class FactTrainingProgramsAttendedModule {}
