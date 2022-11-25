import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseStatus } from '../config/response';
import { CreateFactTrainingProgramsAttendedDto } from './dto/create-fact_training_programs_attended.dto';
import { UpdateFactTrainingProgramsAttendedDto } from './dto/update-fact_training_programs_attended.dto';
import { FactTrainingProgramsAttended } from './entities/fact_training_programs_attended.entity';

@Injectable()
export class FactTrainingProgramsAttendedService {
  constructor (@InjectRepository(FactTrainingProgramsAttended) private factTrainingProgramsAttendedRepository:Repository<FactTrainingProgramsAttended>){}
 async create(createFactTrainingProgramsAttendedDto: CreateFactTrainingProgramsAttendedDto) {
    let fact_training_programs_attended = new FactTrainingProgramsAttended();
    fact_training_programs_attended.userId = createFactTrainingProgramsAttendedDto.userId
    fact_training_programs_attended.titleOfTheProgrammeAttended = createFactTrainingProgramsAttendedDto.titleOfTheProgrammeAttended
    fact_training_programs_attended.duration = createFactTrainingProgramsAttendedDto.duration
    fact_training_programs_attended.trainerDetails = createFactTrainingProgramsAttendedDto.trainerDetails
    fact_training_programs_attended.enableStatus = createFactTrainingProgramsAttendedDto.enableStatus
    fact_training_programs_attended.deleteStatus = createFactTrainingProgramsAttendedDto.deleteStatus
    fact_training_programs_attended.createdBy = createFactTrainingProgramsAttendedDto.createdBy
    fact_training_programs_attended.isActive = createFactTrainingProgramsAttendedDto.isActive

   let saved_fact_training_programs_attended = await this.factTrainingProgramsAttendedRepository.save(fact_training_programs_attended)
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:saved_fact_training_programs_attended
    }
    return response;
  }

  async findAll() {
    let fact_training_programs_attended = await this.factTrainingProgramsAttendedRepository.find()
    let responseData = []
    responseData.push({
      "fact_training_programs_attended":fact_training_programs_attended
    })
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:responseData
    }
    return response;
  }

  async findOne(id:string) {
    let find_one_fact_training_programs_attended = await this.factTrainingProgramsAttendedRepository.findOne({where:{trainingProgramAttendedId:id}})
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:find_one_fact_training_programs_attended
    }
    return response;
  }

async update(updateFactTrainingProgramsAttendedDto: UpdateFactTrainingProgramsAttendedDto) {
  let fact_training_programs_attended = await this.factTrainingProgramsAttendedRepository.findOne({where:{trainingProgramAttendedId:updateFactTrainingProgramsAttendedDto.trainingProgramAttendedId}})
  let fact_training_program_attended_data = {...fact_training_programs_attended,...updateFactTrainingProgramsAttendedDto}
  fact_training_program_attended_data.userId = updateFactTrainingProgramsAttendedDto.userId
  fact_training_program_attended_data.titleOfTheProgrammeAttended = updateFactTrainingProgramsAttendedDto.titleOfTheProgrammeAttended
  fact_training_program_attended_data.duration = updateFactTrainingProgramsAttendedDto.duration
  fact_training_program_attended_data.trainerDetails = updateFactTrainingProgramsAttendedDto.trainerDetails
  fact_training_program_attended_data.enableStatus = updateFactTrainingProgramsAttendedDto.enableStatus
  fact_training_program_attended_data.deleteStatus = updateFactTrainingProgramsAttendedDto.deleteStatus
  fact_training_program_attended_data.updatedBy = updateFactTrainingProgramsAttendedDto.updatedBy
  fact_training_program_attended_data.isActive = updateFactTrainingProgramsAttendedDto.isActive

   
 let saved_fact_training_programs_attended = await this.factTrainingProgramsAttendedRepository.save(fact_training_program_attended_data)
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:saved_fact_training_programs_attended
    }
    return response;
  }
  async remove(id:string) {
    let response = await this.factTrainingProgramsAttendedRepository.delete({trainingProgramAttendedId:id})
    let result = {
      status:ApiResponseStatus.SUCCESS,
      data:response
    }
      return result;
    }
   
}
