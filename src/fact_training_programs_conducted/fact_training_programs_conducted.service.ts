import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseStatus } from '../config/response';
import { CreateFactTrainingProgramsConductedDto } from './dto/create-fact_training_programs_conducted.dto';
import { UpdateFactTrainingProgramsConductedDto } from './dto/update-fact_training_programs_conducted.dto';
import { FactTrainingProgramsConducted } from './entities/fact_training_programs_conducted.entity';

@Injectable()

export class FactTrainingProgramsConductedService {
  constructor(
    @InjectRepository(FactTrainingProgramsConducted)
    private factTrainingProgramsConductedRepository: Repository<FactTrainingProgramsConducted>,
  ) {}
  async create(
    createFactTrainingProgramsConductedDto: CreateFactTrainingProgramsConductedDto,
  ) {
    let fact_training_programs_conducted = new FactTrainingProgramsConducted();
    fact_training_programs_conducted.userId =
      createFactTrainingProgramsConductedDto.userId;
    fact_training_programs_conducted.titleOfTheProgrammeConducted =
      createFactTrainingProgramsConductedDto.titleOfTheProgrammeConducted;
    fact_training_programs_conducted.month =
      createFactTrainingProgramsConductedDto.month;
    fact_training_programs_conducted.levelsParticipantsCovered =
      createFactTrainingProgramsConductedDto.levelsParticipantsCovered;
    fact_training_programs_conducted.enableStatus =
      createFactTrainingProgramsConductedDto.enableStatus;
    fact_training_programs_conducted.deleteStatus =
      createFactTrainingProgramsConductedDto.deleteStatus;
    fact_training_programs_conducted.createdBy =
      createFactTrainingProgramsConductedDto.createdBy;
    fact_training_programs_conducted.isActive =
      createFactTrainingProgramsConductedDto.isActive;

    let saved_fact_training_programs_conducted =
      await this.factTrainingProgramsConductedRepository.save(
        fact_training_programs_conducted,
      );
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_training_programs_conducted,
    };
    return response;
  }

  async findAll() {
    let fact_training_programs_conducted =
      await this.factTrainingProgramsConductedRepository.find();
    let responseData = [];
    responseData.push({
      fact_training_programs_conducted: fact_training_programs_conducted,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_fact_training_programs_conducted =
      await this.factTrainingProgramsConductedRepository.findOne({
        where: { trainingProgramConductedId: id },
      });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_fact_training_programs_conducted,
    };
    return response;
  }

  async update(
    updateFactTrainingProgramsConductedDto: UpdateFactTrainingProgramsConductedDto,
  ) {
    let fact_training_programs_conducted =
      await this.factTrainingProgramsConductedRepository.findOne({
        where: {
          trainingProgramConductedId:
            updateFactTrainingProgramsConductedDto.trainingProgramConductedId,
        },
      });
    let fact_training_program_conducted_data = {
      ...fact_training_programs_conducted,
      ...updateFactTrainingProgramsConductedDto,
    };
    fact_training_program_conducted_data.userId =
      updateFactTrainingProgramsConductedDto.userId;
    fact_training_program_conducted_data.titleOfTheProgrammeConducted =
      updateFactTrainingProgramsConductedDto.titleOfTheProgrammeConducted;
    fact_training_program_conducted_data.month =
      updateFactTrainingProgramsConductedDto.month;
    fact_training_program_conducted_data.levelsParticipantsCovered =
      updateFactTrainingProgramsConductedDto.levelsParticipantsCovered;
    fact_training_program_conducted_data.enableStatus =
      updateFactTrainingProgramsConductedDto.enableStatus;
    fact_training_program_conducted_data.deleteStatus =
      updateFactTrainingProgramsConductedDto.deleteStatus;
    fact_training_program_conducted_data.updatedBy =
      updateFactTrainingProgramsConductedDto.updatedBy;
    fact_training_program_conducted_data.isActive =
      updateFactTrainingProgramsConductedDto.isActive;

    let saved_fact_training_programs_conducted =
      await this.factTrainingProgramsConductedRepository.save(
        fact_training_program_conducted_data,
      );
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_training_programs_conducted,
    };
    return response;
  }
  async remove(id: string) {
    let response = await this.factTrainingProgramsConductedRepository.delete({
      trainingProgramConductedId: id,
    });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }
}
