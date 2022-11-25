import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateDimGeneralAttributeDto } from './dto/create-dim_general_attribute.dto';
import { UpdateDimGeneralAttributeDto } from './dto/update-dim_general_attribute.dto';
import { DimGeneralAttribute } from './entities/dim_general_attribute.entity';

@Injectable()
export class DimGeneralAttributesService {
  constructor(@InjectRepository(DimGeneralAttribute)private dimGeneralAttributeRepository:Repository<DimGeneralAttribute>){}

async  create(createDimGeneralAttributeDto: CreateDimGeneralAttributeDto) {
  let dim_general_attribute = new DimGeneralAttribute();

  dim_general_attribute.keyCompetencyArea = createDimGeneralAttributeDto.keyCompetencyArea
  dim_general_attribute.keyCompetencyAreaDescription = createDimGeneralAttributeDto.keyCompetencyAreaDescription
  dim_general_attribute.enableStatus = createDimGeneralAttributeDto.enableStatus
  dim_general_attribute.deleteStatus = createDimGeneralAttributeDto.deleteStatus
  dim_general_attribute.createdBy = createDimGeneralAttributeDto.createdBy
  dim_general_attribute.isActive = createDimGeneralAttributeDto.isActive

  let saved_dim_general_attribute = await this.dimGeneralAttributeRepository.save(dim_general_attribute)

  let response ={
    status: ApiResponseStatus.SUCCESS,
    data: saved_dim_general_attribute
  }
    return response;
  }

 async findAll() {
  let find_dim_general_attribute = await this.dimGeneralAttributeRepository.find();

  let responseData =[]
  responseData.push({
    'find_dim_general_attribute': find_dim_general_attribute
  })
  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: responseData
  }
    return response;
  }

  async findOne(id: string) {
    let find_one_dim_general_attribute = await this.dimGeneralAttributeRepository.findOne({where:{keyCompetencyAreaId: id}})

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_dim_general_attribute
    }
    return response;
  }

 async update(updateDimGeneralAttributeDto: UpdateDimGeneralAttributeDto) {
  let update_dim_general_attribute = await this.dimGeneralAttributeRepository.findOne({where:{keyCompetencyAreaId: updateDimGeneralAttributeDto.keyCompetencyAreaId}})

  let dim_general_attribute_data = {...update_dim_general_attribute,...updateDimGeneralAttributeDto}

  dim_general_attribute_data.keyCompetencyArea = updateDimGeneralAttributeDto.keyCompetencyArea
  dim_general_attribute_data.keyCompetencyAreaDescription = updateDimGeneralAttributeDto.keyCompetencyAreaDescription
  dim_general_attribute_data.enableStatus = updateDimGeneralAttributeDto.enableStatus
  dim_general_attribute_data.deleteStatus = updateDimGeneralAttributeDto.deleteStatus
  dim_general_attribute_data.updatedBy = updateDimGeneralAttributeDto.updatedBy
  dim_general_attribute_data.isActive = updateDimGeneralAttributeDto.isActive

  let dim_general_attribute_update = await this.dimGeneralAttributeRepository.save(dim_general_attribute_data)

  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: dim_general_attribute_update
  }

    return response;
  }

  async remove(id: string) {
    let response = await this.dimGeneralAttributeRepository.delete({keyCompetencyAreaId: id })

    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response
    }
    return result;
  }
}
