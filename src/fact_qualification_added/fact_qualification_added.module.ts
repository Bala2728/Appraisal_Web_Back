import { Module } from '@nestjs/common';
import { FactQualificationAddedService } from './fact_qualification_added.service';
import { FactQualificationAddedController } from './fact_qualification_added.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactQualificationAdded } from './entities/fact_qualification_added.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FactQualificationAdded])],
  controllers: [FactQualificationAddedController],
  providers: [FactQualificationAddedService],
})
export class FactQualificationAddedModule {}
