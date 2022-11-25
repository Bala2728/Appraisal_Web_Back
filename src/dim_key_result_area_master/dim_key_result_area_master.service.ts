import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateDimKeyResultAreaMasterDto } from './dto/create-dim_key_result_area_master.dto';
import { UpdateDimKeyResultAreaMasterDto } from './dto/update-dim_key_result_area_master.dto';
import { DimKeyResultAreaMaster } from './entities/dim_key_result_area_master.entity';

@Injectable()
export class DimKeyResultAreaMasterService {
  constructor(
    @InjectRepository(DimKeyResultAreaMaster)
    private dimKeyResultAreaMasterRepository: Repository<DimKeyResultAreaMaster>,
  ) {}

  async create(
    createDimKeyResultAreaMasterDto: CreateDimKeyResultAreaMasterDto,
  ) {
    let dim_key_result_area_master = new DimKeyResultAreaMaster();

    dim_key_result_area_master.keyResultAreaHeading =
      createDimKeyResultAreaMasterDto.keyResultAreaHeading;
    dim_key_result_area_master.keyResultAreaHeadingDescription =
      createDimKeyResultAreaMasterDto.keyResultAreaHeadingDescription;
    dim_key_result_area_master.keyResultAreaSubHeading =
      createDimKeyResultAreaMasterDto.keyResultAreaSubHeading;
    dim_key_result_area_master.keyResultAreaSubHeadingDescription =
      createDimKeyResultAreaMasterDto.keyResultAreaSubHeadingDescription;
    dim_key_result_area_master.percentageWeightage =
      createDimKeyResultAreaMasterDto.percentageWeightage;
    dim_key_result_area_master.enableStatus =
      createDimKeyResultAreaMasterDto.enableStatus;
    dim_key_result_area_master.deleteStatus =
      createDimKeyResultAreaMasterDto.deleteStatus;
    dim_key_result_area_master.createdBy =
      createDimKeyResultAreaMasterDto.createdBy;
    dim_key_result_area_master.isActive =
      createDimKeyResultAreaMasterDto.isActive;

    let saved_dim_key_result_area_master =
      await this.dimKeyResultAreaMasterRepository.save(
        dim_key_result_area_master,
      );
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_dim_key_result_area_master,
    };

    return response;
  }

  async findAll() {
    let find_dim_key_result_area_master =
      await this.dimKeyResultAreaMasterRepository.find();
    let responseData = [];
    responseData.push({
      find_dim_key_result_area_master: find_dim_key_result_area_master,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_dim_key_result_area_master =
      await this.dimKeyResultAreaMasterRepository.findOne({
        where: { keyResultAreaId: id },
      });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_dim_key_result_area_master,
    };
    return response;
  }

  async update(
    updateDimKeyResultAreaMasterDto: UpdateDimKeyResultAreaMasterDto,
  ) {
    let update_dim_key_result_area_master =
      await this.dimKeyResultAreaMasterRepository.findOne({
        where: {
          keyResultAreaId: updateDimKeyResultAreaMasterDto.keyResultAreaId,
        },
      });
    let dim_key_result_area_master_data = {
      ...update_dim_key_result_area_master,
      ...updateDimKeyResultAreaMasterDto,
    };

    dim_key_result_area_master_data.keyResultAreaHeading =
      updateDimKeyResultAreaMasterDto.keyResultAreaHeading;
    dim_key_result_area_master_data.keyResultAreaHeadingDescription =
      updateDimKeyResultAreaMasterDto.keyResultAreaHeadingDescription;
    dim_key_result_area_master_data.keyResultAreaSubHeading =
      updateDimKeyResultAreaMasterDto.keyResultAreaSubHeading;
    dim_key_result_area_master_data.keyResultAreaSubHeadingDescription =
      updateDimKeyResultAreaMasterDto.keyResultAreaSubHeadingDescription;
    dim_key_result_area_master_data.percentageWeightage =
      updateDimKeyResultAreaMasterDto.percentageWeightage;
    dim_key_result_area_master_data.enableStatus =
      updateDimKeyResultAreaMasterDto.enableStatus;
    dim_key_result_area_master_data.deleteStatus =
      updateDimKeyResultAreaMasterDto.deleteStatus;
    dim_key_result_area_master_data.updatedBy =
      updateDimKeyResultAreaMasterDto.updatedBy;
    dim_key_result_area_master_data.isActive =
      updateDimKeyResultAreaMasterDto.isActive;

    let dim_key_result_area_master_update =
      await this.dimKeyResultAreaMasterRepository.save(
        dim_key_result_area_master_data,
      );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: dim_key_result_area_master_update
    };
    return response;
  }

  async remove(id: string) {
    let response = await this.dimKeyResultAreaMasterRepository.delete({
      keyResultAreaId: id,
    });

    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }
}
