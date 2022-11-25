import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FactEmployeeWithRo } from 'src/fact_employee_with_ro/entities/fact_employee_with_ro.entity';
import { Repository } from 'typeorm';
import { ApiResponse, ApiResponseStatus } from '../config/response';
import { CreateFactEmployeeWithAoDto } from './dto/create-fact_employee_with_ao.dto';
import { PeriodWorkedDto } from './dto/period_worked.dto';
import { UpdateFactEmployeeWithAoDto } from './dto/update-fact_employee_with_ao.dto';
import { FactEmployeeWithAo } from './entities/fact_employee_with_ao.entity';

@Injectable()
export class FactEmployeeWithAoService {
  constructor(
    @InjectRepository(FactEmployeeWithAo)
    private factEmployeeWithAoRepository: Repository<FactEmployeeWithAo>,
    @InjectRepository(FactEmployeeWithRo)
    private factEmployeeWithRoRepository: Repository<FactEmployeeWithRo>,
  ) {}
  async create(createFactEmployeeWithAoDto: CreateFactEmployeeWithAoDto) {
    let fact_employee_with_AO = new FactEmployeeWithAo();
    fact_employee_with_AO.userId = createFactEmployeeWithAoDto.userId;
    fact_employee_with_AO.appraisingOfficerName =
      createFactEmployeeWithAoDto.appraisingOfficerName;
    fact_employee_with_AO.appraisingOfficerStartTime =
      createFactEmployeeWithAoDto.appraisingOfficerStartTime;
    fact_employee_with_AO.appraisingOfficerEndTime =
      createFactEmployeeWithAoDto.appraisingOfficerEndTime;
    fact_employee_with_AO.enableStatus =
      createFactEmployeeWithAoDto.enableStatus;
    fact_employee_with_AO.deleteStatus =
      createFactEmployeeWithAoDto.deleteStatus;
    fact_employee_with_AO.createdBy = createFactEmployeeWithAoDto.createdBy;
    fact_employee_with_AO.isActive = createFactEmployeeWithAoDto.isActive;

    let saved_fact_employee_with_AO =
      await this.factEmployeeWithAoRepository.save(fact_employee_with_AO);
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_employee_with_AO,
    };
    return response;
  }

  async periodWork(periodWorkedDto: PeriodWorkedDto) {
    let fact_employee_with_AO = new FactEmployeeWithAo();
    fact_employee_with_AO.userId = periodWorkedDto.userId;
    fact_employee_with_AO.appraisingOfficerName =
      periodWorkedDto.appraisingOfficerName;
    fact_employee_with_AO.appraisingOfficerStartTime =
      periodWorkedDto.appraisingOfficerStartTime;
    fact_employee_with_AO.appraisingOfficerEndTime =
      periodWorkedDto.appraisingOfficerEndTime;
    fact_employee_with_AO.isActive = periodWorkedDto.status;
    let saved_fact_employee_with_AO =
      await this.factEmployeeWithAoRepository.save(fact_employee_with_AO);

    let fact_employee_with_RO = new FactEmployeeWithRo();
    fact_employee_with_RO.userId = periodWorkedDto.userId;
    fact_employee_with_RO.reviewingOfficerName =
      periodWorkedDto.reviewingOfficerName;
    fact_employee_with_RO.reviewingOfficerStartTime =
      periodWorkedDto.reviewingOfficerStartTime;
    fact_employee_with_RO.reviewingOfficerEndTime =
      periodWorkedDto.reviewingOfficerEndTime;
    fact_employee_with_RO.isActive = periodWorkedDto.status;
    let saved_fact_employee_with_RO =
      await this.factEmployeeWithRoRepository.save(fact_employee_with_RO);

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: {
        saved_fact_employee_with_AO: saved_fact_employee_with_AO,
        saved_fact_employee_with_RO: saved_fact_employee_with_RO,
      },
    };
    return response;
  }

  async findAll() {
    let fact_employee_with_AO = await this.factEmployeeWithAoRepository.find();
    let responseData = [];
    responseData.push({
      fact_employee_with_AO: fact_employee_with_AO,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_fact_employee_with_AO =
      await this.factEmployeeWithAoRepository.findOne({
        where: { appraisingOfficerId: id },
      });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_fact_employee_with_AO,
    };
    return response;
  }

  async update(updateFactEmployeeWithAoDto: UpdateFactEmployeeWithAoDto) {
    let fact_employee_with_AO = await this.factEmployeeWithAoRepository.findOne(
      {
        where: {
          appraisingOfficerId: updateFactEmployeeWithAoDto.appraisingOfficerId,
        },
      },
    );
    let fact_employee_with_AO_data = {
      ...fact_employee_with_AO,
      ...updateFactEmployeeWithAoDto,
    };
    fact_employee_with_AO_data.userId = updateFactEmployeeWithAoDto.userId;
    fact_employee_with_AO_data.appraisingOfficerName =
      updateFactEmployeeWithAoDto.appraisingOfficerName;
    fact_employee_with_AO_data.appraisingOfficerStartTime =
      updateFactEmployeeWithAoDto.appraisingOfficerStartTime;
    fact_employee_with_AO_data.appraisingOfficerEndTime =
      updateFactEmployeeWithAoDto.appraisingOfficerEndTime;
    fact_employee_with_AO_data.enableStatus =
      updateFactEmployeeWithAoDto.enableStatus;
    fact_employee_with_AO_data.deleteStatus =
      updateFactEmployeeWithAoDto.deleteStatus;
    fact_employee_with_AO_data.updatedBy =
      updateFactEmployeeWithAoDto.updatedBy;
    fact_employee_with_AO_data.isActive = updateFactEmployeeWithAoDto.isActive;
    let saved_fact_employee_with_AO =
      await this.factEmployeeWithAoRepository.save(fact_employee_with_AO_data);
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_employee_with_AO,
    };
    return response;
  }

  async remove(id: string) {
    let response = await this.factEmployeeWithAoRepository.delete({
      appraisingOfficerId: id,
    });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }
}
