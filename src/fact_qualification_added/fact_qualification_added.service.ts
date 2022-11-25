import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CONFIG } from 'src/config/config';
import { ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateFactQualificationAddedDto } from './dto/create-fact_qualification_added.dto';
import { UpdateFactQualificationAddedDto } from './dto/update-fact_qualification_added.dto';
import { FactQualificationAdded } from './entities/fact_qualification_added.entity';

@Injectable()
export class FactQualificationAddedService {
  constructor(
    @InjectRepository(FactQualificationAdded)
    private factQualificationAddedRepository: Repository<FactQualificationAdded>,
  ) {}

  async create(
    createFactQualificationAddedDto: CreateFactQualificationAddedDto,
  ) {
    let fact_qualification_added = new FactQualificationAdded();

    fact_qualification_added.userId = createFactQualificationAddedDto.userId;
    fact_qualification_added.qualificationCertificationTitle =
      createFactQualificationAddedDto.qualificationCertificationTitle;
    fact_qualification_added.instituteUniversity =
      createFactQualificationAddedDto.instituteUniversity;
    fact_qualification_added.percentage =
      createFactQualificationAddedDto.percentage;
    fact_qualification_added.uploadCertificates =
      createFactQualificationAddedDto.uploadCertificates;
    fact_qualification_added.enableStatus =
      createFactQualificationAddedDto.enableStatus;
    fact_qualification_added.deleteStatus =
      createFactQualificationAddedDto.deleteStatus;
    fact_qualification_added.createdBy =
      createFactQualificationAddedDto.createdBy;
    fact_qualification_added.isActive =
      createFactQualificationAddedDto.isActive;

    let saved_fact_qualification_added =
      await this.factQualificationAddedRepository.save(
        fact_qualification_added,
      );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_fact_qualification_added,
    };

    return response;
  }

  async findAll() {
    let find_fact_qualification_added =
      await this.factQualificationAddedRepository.find();
    let responseData = [];
    responseData.push({
      find_fact_qualification_added: find_fact_qualification_added,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_fact_qualification_added =
      await this.factQualificationAddedRepository.findOne({
        where: { qualificationAddedId: id },
      });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_fact_qualification_added,
    };
    return response;
  }

  async update(
    updateFactQualificationAddedDto: UpdateFactQualificationAddedDto,
  ) {
    let update_fact_qualification_added =
      await this.factQualificationAddedRepository.findOne({
        where: {
          qualificationAddedId:
            updateFactQualificationAddedDto.qualificationAddedId,
        },
      });

    let fact_qualification_added_data = {
      ...update_fact_qualification_added,
      ...updateFactQualificationAddedDto,
    };

    fact_qualification_added_data.userId =
      updateFactQualificationAddedDto.userId;
    fact_qualification_added_data.qualificationCertificationTitle =
      updateFactQualificationAddedDto.qualificationCertificationTitle;
    fact_qualification_added_data.instituteUniversity =
      updateFactQualificationAddedDto.instituteUniversity;
    fact_qualification_added_data.percentage =
      updateFactQualificationAddedDto.percentage;
    fact_qualification_added_data.uploadCertificates =
      updateFactQualificationAddedDto.uploadCertificates;
    fact_qualification_added_data.enableStatus =
      updateFactQualificationAddedDto.enableStatus;
    fact_qualification_added_data.deleteStatus =
      updateFactQualificationAddedDto.deleteStatus;
    fact_qualification_added_data.updatedBy =
      updateFactQualificationAddedDto.updatedBy;
    fact_qualification_added_data.isActive =
      updateFactQualificationAddedDto.isActive;

    let fact_qualification_added_update =
      await this.factQualificationAddedRepository.save(
        fact_qualification_added_data,
      );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: fact_qualification_added_update,
    };

    return response;
  }

  async remove(id: string) {
    let response = await this.factQualificationAddedRepository.delete({
      qualificationAddedId: id,
    });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }

  async uploadfile(file: Express.Multer.File, userId: string) {
    console.log(file.buffer);
    //console.log(fileType);
    let advisorImgPath = `${file}`;
    let Url = `${CONFIG.baseUrl}${file.filename}`;

    await this.factQualificationAddedRepository
      .createQueryBuilder()
      .createQueryBuilder()
      .update(FactQualificationAdded)
      .where({ userId: userId })
      .set({ uploadCertificates: Url })
      .execute();
    let response = {
      status: ApiResponseStatus.SUCCESS,
    };
    return response;
  }
}
