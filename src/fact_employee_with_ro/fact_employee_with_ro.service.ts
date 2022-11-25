import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseStatus } from '../config/response';
import { CreateFactEmployeeWithRoDto } from './dto/create-fact_employee_with_ro.dto';
import { UpdateFactEmployeeWithRoDto } from './dto/update-fact_employee_with_ro.dto';
import { FactEmployeeWithRo } from './entities/fact_employee_with_ro.entity';

@Injectable()
export class FactEmployeeWithRoService {
  constructor (@InjectRepository(FactEmployeeWithRo) private factEmployeeWithRoRepository:Repository<FactEmployeeWithRo>){}

  async create(createFactEmployeeWithRoDto: CreateFactEmployeeWithRoDto) {
    let fact_employee_with_RO = new FactEmployeeWithRo();
    fact_employee_with_RO.userId = createFactEmployeeWithRoDto.userId
    fact_employee_with_RO.reviewingOfficerName = createFactEmployeeWithRoDto.reviewingOfficerName
    fact_employee_with_RO.reviewingOfficerStartTime = createFactEmployeeWithRoDto.reviewingOfficerStartTime
    fact_employee_with_RO.reviewingOfficerEndTime = createFactEmployeeWithRoDto.reviewingOfficerEndTime
    fact_employee_with_RO.enableStatus = createFactEmployeeWithRoDto.enableStatus
    fact_employee_with_RO.deleteStatus = createFactEmployeeWithRoDto.deleteStatus
    fact_employee_with_RO.createdBy = createFactEmployeeWithRoDto.createdBy
    fact_employee_with_RO.isActive = createFactEmployeeWithRoDto.isActive

    let saved_fact_employee_with_RO = await this.factEmployeeWithRoRepository.save(fact_employee_with_RO)
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:saved_fact_employee_with_RO
    }
    return response;
  }
  async findAll() {
    let fact_employee_with_RO = await this.factEmployeeWithRoRepository.find()
    let responseData = []
    responseData.push({
      "fact_employee_with_RO":fact_employee_with_RO
    })
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:responseData
    }
    return response;
  }

  async findOne(id: string) {
    let find_one_fact_employee_with_RO = await this.factEmployeeWithRoRepository.findOne({where:{reviewingOfficerId:id}})
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:find_one_fact_employee_with_RO
    }
    return response;
  }

  async update(updateFactEmployeeWithRoDto: UpdateFactEmployeeWithRoDto) {
    let fact_employee_with_RO = await this.factEmployeeWithRoRepository.findOne({where:{reviewingOfficerId:updateFactEmployeeWithRoDto.reviewingOfficerId}})
    let fact_employee_with_RO_data = {...fact_employee_with_RO,...updateFactEmployeeWithRoDto}
    fact_employee_with_RO_data.userId = updateFactEmployeeWithRoDto.userId
    fact_employee_with_RO_data.reviewingOfficerName = updateFactEmployeeWithRoDto.reviewingOfficerName
    fact_employee_with_RO_data.reviewingOfficerStartTime = updateFactEmployeeWithRoDto.reviewingOfficerStartTime
    fact_employee_with_RO_data.reviewingOfficerEndTime = updateFactEmployeeWithRoDto.reviewingOfficerEndTime
    fact_employee_with_RO_data.enableStatus = updateFactEmployeeWithRoDto.enableStatus
    fact_employee_with_RO_data.deleteStatus = updateFactEmployeeWithRoDto.deleteStatus
    fact_employee_with_RO_data.updatedBy = updateFactEmployeeWithRoDto.updatedBy
    fact_employee_with_RO_data.isActive = updateFactEmployeeWithRoDto.isActive
    
    let saved_fact_employee_with_RO = await this.factEmployeeWithRoRepository.save(fact_employee_with_RO_data)
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:saved_fact_employee_with_RO
    }
    return response;
  }

  async remove(id:string) {
    let response = await this.factEmployeeWithRoRepository.delete({reviewingOfficerId:id})
    let result = {
      status:ApiResponseStatus.SUCCESS,
      data:response
    }
      return result;
    }
}
