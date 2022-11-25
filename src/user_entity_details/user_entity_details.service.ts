import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ApiResponse,
  ApiResponseStatus,
  ErrorMessageType,
} from 'src/config/response';
import { Repository } from 'typeorm';
import { CreateUserEntityDetailDto } from './dto/create-user_entity_detail.dto';
import { UpdateUserEntityDetailDto } from './dto/update-user_entity_detail.dto';
import { UserEntityDetail } from './entities/user_entity_detail.entity';

@Injectable()
export class UserEntityDetailsService {
  constructor(
    @InjectRepository(UserEntityDetail)
    private userEntityDetailRepository: Repository<UserEntityDetail>,
  ) {}

  async create(createUserEntityDetailDto: CreateUserEntityDetailDto) {
    let user_entity_detail = new UserEntityDetail();

    if (createUserEntityDetailDto.loginUsername === '') {
      let response: ApiResponse<UserEntityDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserEntityDetailDto.loginUsername} invalid input`,
        },
      };
      return response;
    } else if (createUserEntityDetailDto.loginUsername.length < 50) {
      let response: ApiResponse<UserEntityDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserEntityDetailDto.loginUsername}should not be empty`,
        },
      };
      return response;
    }

    if (createUserEntityDetailDto.loginPassword === '') {
      let response: ApiResponse<UserEntityDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserEntityDetailDto.loginPassword} should be atleast 8 letters`,
        },
      };
      return response;
    } else if (createUserEntityDetailDto.loginPassword.length < 8) {
      let response: ApiResponse<UserEntityDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserEntityDetailDto.loginPassword} should be 8 letters`,
        },
      };
      return response;
    }

    if (createUserEntityDetailDto.userName === '') {
      let response: ApiResponse<UserEntityDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserEntityDetailDto.userName}should not be empty`,
        },
      };
      return response;
    }

    user_entity_detail.loginUsername = createUserEntityDetailDto.loginUsername;
    user_entity_detail.loginPassword = createUserEntityDetailDto.loginPassword;
    user_entity_detail.userName = createUserEntityDetailDto.userName;
    user_entity_detail.userId = createUserEntityDetailDto.userId;
    user_entity_detail.designation = createUserEntityDetailDto.designation;
    user_entity_detail.dateOfJoining = createUserEntityDetailDto.dateOfJoining;
    user_entity_detail.role = createUserEntityDetailDto.role;
    user_entity_detail.department = createUserEntityDetailDto.department;
    user_entity_detail.qualifications =
      createUserEntityDetailDto.qualifications;
    user_entity_detail.gradeLevel = createUserEntityDetailDto.gradeLevel;
    user_entity_detail.totalExperience =
      createUserEntityDetailDto.totalExperience;
    user_entity_detail.primarySkill = createUserEntityDetailDto.primarySkill;
    user_entity_detail.interchangeExp =
      createUserEntityDetailDto.interchangeExp;
    user_entity_detail.performanceAssessmentPeriod =
      createUserEntityDetailDto.performanceAssessmentPeriod;
    user_entity_detail.enableStatus = createUserEntityDetailDto.enableStatus;
    user_entity_detail.deleteStatus = createUserEntityDetailDto.deleteStatus;
    user_entity_detail.createdBy = createUserEntityDetailDto.createdBy;
    user_entity_detail.isActive = createUserEntityDetailDto.isActive;
    user_entity_detail.userId = createUserEntityDetailDto.userId;
    let saved_user_entity_detail = await this.userEntityDetailRepository.save(
      user_entity_detail,
    );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_user_entity_detail,
    };

    return response;
  }

  async findAll() {
    let find_user_enitiy_detail = await this.userEntityDetailRepository.find();
    let responseData = [];
    responseData.push({
      find_user_enitiy_detail: find_user_enitiy_detail,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string) {
    let find_one_user_entity_detail =
      await this.userEntityDetailRepository.findOne({ where: { userId: id } });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_user_entity_detail,
    };
    return response;
  }

  async update(updateUserEntityDetailDto: UpdateUserEntityDetailDto) {
    let update_user_entity_detail =
      await this.userEntityDetailRepository.findOne({
        where: { userId: updateUserEntityDetailDto.userId },
      });

    let user_entity_detail_data = {
      ...update_user_entity_detail,
      ...updateUserEntityDetailDto,
    };

    user_entity_detail_data.loginUsername =
      updateUserEntityDetailDto.loginUsername;
    user_entity_detail_data.loginPassword =
      updateUserEntityDetailDto.loginPassword;
    user_entity_detail_data.userName = updateUserEntityDetailDto.userName;
    user_entity_detail_data.userId = updateUserEntityDetailDto.userId;
    user_entity_detail_data.designation = updateUserEntityDetailDto.designation;
    user_entity_detail_data.dateOfJoining =
      updateUserEntityDetailDto.dateOfJoining;
    user_entity_detail_data.role = updateUserEntityDetailDto.role;
    user_entity_detail_data.department = updateUserEntityDetailDto.department;
    user_entity_detail_data.qualifications =
      updateUserEntityDetailDto.qualifications;
    user_entity_detail_data.gradeLevel = updateUserEntityDetailDto.gradeLevel;
    user_entity_detail_data.totalExperience =
      updateUserEntityDetailDto.totalExperience;
    user_entity_detail_data.primarySkill =
      updateUserEntityDetailDto.primarySkill;
    user_entity_detail_data.interchangeExp =
      updateUserEntityDetailDto.interchangeExp;
    user_entity_detail_data.performanceAssessmentPeriod =
      updateUserEntityDetailDto.performanceAssessmentPeriod;
    user_entity_detail_data.enableStatus =
      updateUserEntityDetailDto.enableStatus;
    user_entity_detail_data.deleteStatus =
      updateUserEntityDetailDto.deleteStatus;
    user_entity_detail_data.updatedBy = updateUserEntityDetailDto.updatedBy;
    user_entity_detail_data.isActive = updateUserEntityDetailDto.isActive;

    let user_entity_detail_update = await this.userEntityDetailRepository.save(
      user_entity_detail_data,
    );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: user_entity_detail_update,
    };

    return response;
  }

  async remove(id: string) {
    let response = await this.userEntityDetailRepository.delete({
      userEntityId: id,
    });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }
}
