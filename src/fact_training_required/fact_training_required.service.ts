import { Injectable } from '@nestjs/common';
import { ApiAcceptedResponse } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateFactTrainingRequiredDto } from './dto/create-fact_training_required.dto';
import { UpdateFactTrainingRequiredDto } from './dto/update-fact_training_required.dto';
import { FactTrainingRequired } from './entities/fact_training_required.entity';

@Injectable()
export class FactTrainingRequiredService {
  constructor(@InjectRepository(FactTrainingRequired)private factTrainingRequiredRepository: Repository<FactTrainingRequired>){}

 async create(createFactTrainingRequiredDto: CreateFactTrainingRequiredDto) {
  let fact_training_required = new FactTrainingRequired();


 
  fact_training_required.userId = createFactTrainingRequiredDto.userId
  fact_training_required.appraiseeComments = createFactTrainingRequiredDto.appraiseeComments
  fact_training_required.appraiserComments = createFactTrainingRequiredDto.appraiserComments
  fact_training_required.enableStatus = createFactTrainingRequiredDto.enableStatus
  fact_training_required.deleteStatus = createFactTrainingRequiredDto.deleteStatus
  fact_training_required.createdBy = createFactTrainingRequiredDto.createdBy
  fact_training_required.isActive =createFactTrainingRequiredDto.isActive

  let saved_fact_training_required = await this.factTrainingRequiredRepository.save(fact_training_required)

  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: saved_fact_training_required
  }

    return  response;
  }

  async findAll() {
    let find_fact_training_required = await this.factTrainingRequiredRepository.find();

    let responseData = []
    responseData.push({
      'find_fact_training_required': find_fact_training_required
    })
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData
    }
    return response;
  }

 async findOne(id: string) {
  let find_one_fact_training_required = await this.factTrainingRequiredRepository.findOne({where: {trainingRequiredId: id}})
  
  let response ={
    status: ApiResponseStatus.SUCCESS,
    data: find_one_fact_training_required
  }
    return response;
  }

 async update(updateFactTrainingRequiredDto: UpdateFactTrainingRequiredDto) {
  let update_fact_training_required = await this.factTrainingRequiredRepository.findOne({where:{trainingRequiredId:updateFactTrainingRequiredDto.trainingRequiredId}})

  let fact_training_required_data = {...update_fact_training_required,...updateFactTrainingRequiredDto}

  fact_training_required_data.userId = updateFactTrainingRequiredDto.userId
  fact_training_required_data.appraiseeComments = updateFactTrainingRequiredDto.appraiseeComments
  fact_training_required_data.appraiserComments = updateFactTrainingRequiredDto.appraiserComments
  fact_training_required_data.enableStatus = updateFactTrainingRequiredDto.enableStatus
  fact_training_required_data.deleteStatus = updateFactTrainingRequiredDto.deleteStatus
  fact_training_required_data.updatedBy = updateFactTrainingRequiredDto.updatedBy
  fact_training_required_data.isActive =updateFactTrainingRequiredDto.isActive

  let fact_training_required_update = await this.factTrainingRequiredRepository.save(fact_training_required_data)

  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: fact_training_required_update
  }
    return response;
  }

  async remove(id: string) {
    let response = await this.factTrainingRequiredRepository.delete({trainingRequiredId: id})

    let result={
      status: ApiResponseStatus.SUCCESS,
      data: response
    }
    return result;
  }
}
