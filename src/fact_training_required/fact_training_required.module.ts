import { Module } from '@nestjs/common';
import { FactTrainingRequiredService } from './fact_training_required.service';
import { FactTrainingRequiredController } from './fact_training_required.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactTrainingRequired } from './entities/fact_training_required.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactTrainingRequired])],
  controllers: [FactTrainingRequiredController],
  providers: [FactTrainingRequiredService],
})
export class FactTrainingRequiredModule {}
