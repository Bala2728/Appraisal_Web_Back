import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateFactGeneralAttributes2Dto } from './dto/create-fact_general_attributes_2.dto';
import { UpdateFactGeneralAttributes2Dto } from './dto/update-fact_general_attributes_2.dto';
import { FactGeneralAttributes2 } from './entities/fact_general_attributes_2.entity';

@Injectable()
export class FactGeneralAttributes2Service {
  constructor(
    @InjectRepository(FactGeneralAttributes2)
    private factGeneralAttributes2Repository: Repository<FactGeneralAttributes2>,
  ) {}

  async create(
    createFactGeneralAttributes2Dto: CreateFactGeneralAttributes2Dto,
  ) {
    // let fact_general_attributes_2 = new FactGeneralAttributes2();

    let saved_fact_general_attributes_2 =
      await this.factGeneralAttributes2Repository.save({
        ...createFactGeneralAttributes2Dto,
      });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_general_attributes_2,
    };

    return response;
  }

  async findAll() {
    let find_fact_general_attributes_2 =
      await this.factGeneralAttributes2Repository.find();

    let responseData = [];
    responseData.push({
      find_fact_general_attributes_2: find_fact_general_attributes_2,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_general_attributes =
      await this.factGeneralAttributes2Repository.findOne({
        where: { factKeyCompetencyAreaId: id },
      });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_general_attributes,
    };
    return response;
  }

  async update(
    updateFactGeneralAttributes2Dto: UpdateFactGeneralAttributes2Dto,
  ) {
    let update_fact_general_atteributes =
      await this.factGeneralAttributes2Repository.findOne({
        where: {
          factKeyCompetencyAreaId:
            updateFactGeneralAttributes2Dto.factKeyCompetencyAreaId,
        },
      });

    let fact_general_attributes_data = {
      ...update_fact_general_atteributes,
      ...updateFactGeneralAttributes2Dto,
    };

    let update_saved = await this.factGeneralAttributes2Repository.save(
      fact_general_attributes_data,
    );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: update_saved,
    };
    return response;
    // console.log(response);
  }

  async remove(id: string) {
    let response = await this.factGeneralAttributes2Repository.delete({
      factKeyCompetencyAreaId: id,
    });

    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }
}
