import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateFactKeyResultAreaDto } from './dto/create-fact_key_result_area.dto';
import { UpdateFactKeyResultAreaDto } from './dto/update-fact_key_result_area.dto';
import { FactKeyResultArea } from './entities/fact_key_result_area.entity';

@Injectable()
export class FactKeyResultAreaService {
  constructor(@InjectRepository(FactKeyResultArea)private factKeyResultAreaRepository: Repository<FactKeyResultArea>){}

 async create(createFactKeyResultAreaDto: CreateFactKeyResultAreaDto) {
  // let fact_key_result_area = new FactKeyResultArea();

  let saved_fact_key_result_area = await this.factKeyResultAreaRepository.save({...createFactKeyResultAreaDto});

  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: saved_fact_key_result_area
  }

    return  response;
  }

  async findAll() {
    let find_fact_key_result_area = await this.factKeyResultAreaRepository.find();
    let responseData = []
    responseData.push({
      'find_fact_key_result_area': find_fact_key_result_area
    })
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData
    }
    return  response;
  }

 async findOne(id: string) {
  let find_one_fact_key_result_area = await this.factKeyResultAreaRepository.findOne({where:{factKeyResultAreaId: id}})

  let responseData = []
  responseData.push(
    find_one_fact_key_result_area
  )
  // let response = {
  //   status: ApiResponseStatus.SUCCESS,
  //   data: find_one_fact_key_result_area
  // }
    return  responseData ;
  }

 async update(updateFactKeyResultAreaDto: UpdateFactKeyResultAreaDto) {
  let update_fact_key_result_area = await this.factKeyResultAreaRepository.findOne({where: {factKeyResultAreaId:updateFactKeyResultAreaDto.factKeyResultAreaId}})

  let fact_key_result_area_data = {...update_fact_key_result_area,...updateFactKeyResultAreaDto}

  let update_saved = await this.factKeyResultAreaRepository.save(fact_key_result_area_data)

  let response = {
    status: ApiResponseStatus.SUCCESS,
    data: update_saved
  }
    return  response;
  }

 async remove(id: string) {
  let response = await this.factKeyResultAreaRepository.delete({factKeyResultAreaId: id})

  let result = {
    status: ApiResponseStatus.SUCCESS,
    data: response
  }
    return  result;
  }
}
