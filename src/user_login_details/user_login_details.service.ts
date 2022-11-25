import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ApiResponse,
  ApiResponseStatus,
  ErrorMessageType,
} from 'src/config/response';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserLoginDetailDto } from './dto/create-user_login_detail.dto';
import { LoginResponseDto } from './dto/login_response.dto';
import { UpdateUserLoginDetailDto } from './dto/update-user_login_detail.dto';
import { UserLoginDetail } from './entities/user_login_detail.entity';

let fullRegex: '(?=.\\d)(?=.[a-z])(?=.*[A-Z]).{8,}';
let passwordIsEmpty: '';
let lowerCaseLettersRegex: '(?=.*[a-z])';
let upperCaseLettersRegex: '(?=.*[A-Z])';
let numbersRegex: '(?=.*[0-9])';
let passwordMinimumLength: 8;

@Injectable()
export class UserLoginDetailsService {
  constructor(
    @InjectRepository(UserLoginDetail)
    private userLoginDetailRepository: Repository<UserLoginDetail>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserLoginDetailDto: CreateUserLoginDetailDto) {
    let user_login_detail = new UserLoginDetail();

    if (createUserLoginDetailDto.userType === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.userType}user type should not be empty`,
        },
      };
      return response;
    }

    if (createUserLoginDetailDto.loginUsername === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.loginUsername}user name should not be empty`,
        },
      };
      return response;
    }

    if (createUserLoginDetailDto.loginPassword === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.loginPassword}password should be atleast 8 letters`,
        },
      };
      return response;
    } else if (createUserLoginDetailDto.loginPassword.length < 8) {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.loginPassword} should be 8 letters`,
        },
      };
      return response;
    }

    if (createUserLoginDetailDto.enableStatus === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.enableStatus}enable status should not be empty`,
        },
      };
      return response;
    }

    if (createUserLoginDetailDto.deleteStatus === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.deleteStatus}deleteStatus should not be empty`,
        },
      };
      return response;
    }
    if (createUserLoginDetailDto.IsActive) {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.IsActive} should not be empty`,
        },
      };
      return response;
    }
    if (createUserLoginDetailDto.createdBy === '') {
      let response: ApiResponse<UserLoginDetail> = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: `${createUserLoginDetailDto.createdBy}is not empty`,
        },
      };
      return response;
    }

    user_login_detail.userId = createUserLoginDetailDto.userId;
    user_login_detail.userType = createUserLoginDetailDto.userType;
    user_login_detail.loginUsername = createUserLoginDetailDto.loginUsername;
    user_login_detail.loginPassword = createUserLoginDetailDto.loginPassword;
    user_login_detail.enableStatus = createUserLoginDetailDto.enableStatus;
    user_login_detail.deleteStatus = createUserLoginDetailDto.deleteStatus;
    user_login_detail.createdBy = createUserLoginDetailDto.createdBy;
    user_login_detail.IsActive = createUserLoginDetailDto.IsActive;

    let saved_user_login_detail = await this.userLoginDetailRepository.save(
      user_login_detail,
    );
    let response = {
      status: ApiResponseStatus.SUCCESS,
    };

    return response;
  }

  async findAll() {
    let find_user_login_detail = await this.userLoginDetailRepository.find();
    let responseData = [];
    responseData.push({
      find_user_login_detail: find_user_login_detail,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };

    return response;
  }

  async findOne(id: string) {
    let find_one_user_login_detail =
      await this.userLoginDetailRepository.findOne({
        where: { userLoginId: id },
      });

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_user_login_detail,
    };
    return response;
  }

  async update(updateUserLoginDetailDto: UpdateUserLoginDetailDto) {
    let update_user_login_detail = await this.userLoginDetailRepository.findOne(
      { where: { userLoginId: updateUserLoginDetailDto.userLoginId } },
    );

    let user_login_detail_data = {
      ...update_user_login_detail,
      ...updateUserLoginDetailDto,
    };

    // user_login_detail_data.userId = updateUserLoginDetailDto.userId;
    user_login_detail_data.userType = updateUserLoginDetailDto.userType;
    user_login_detail_data.loginUsername =
      updateUserLoginDetailDto.loginUsername;
    user_login_detail_data.loginPassword =
      updateUserLoginDetailDto.loginPassword;
    user_login_detail_data.enableStatus = updateUserLoginDetailDto.enableStatus;
    user_login_detail_data.deleteStatus = updateUserLoginDetailDto.deleteStatus;
    user_login_detail_data.createdBy = updateUserLoginDetailDto.createdBy;
    user_login_detail_data.IsActive = updateUserLoginDetailDto.IsActive;

    let user_login_detail_update = await this.userLoginDetailRepository.save(
      user_login_detail_data,
    );

    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: user_login_detail_update,
    };

    return response;
  }

  async remove(id: string) {
    let response = await this.userLoginDetailRepository.delete({
      userLoginId: id,
    });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }

  async loginUser(loginResponseDto: LoginResponseDto) {
    let login_user = await this.userLoginDetailRepository
      .createQueryBuilder()
      .select(['user_type', 'user_id'])
      .where('login_username = :loginUsername', {
        loginUsername: loginResponseDto.loginUsername,
      })
      .andWhere('login_password = :loginPassword', {
        loginPassword: loginResponseDto.loginPassword,
      })
      .execute();
    // let find_employee_infromation = await this.userRepository.findOne({where:{userMasterId:login_user.userMasterId}})

    console.log(login_user);
    let response: ApiResponse<UserLoginDetail>;
    let responseData = [];
    responseData.push({
      login_user: login_user,
      // "find_employee_infromation":find_employee_infromation
    });
    // let login_us = login_user

    let data = responseData[0].login_user;

    if (data.length === 0) {
      response = {
        status: ApiResponseStatus.ERROR,
        error: {
          type: ErrorMessageType.ERROR,
          message: 'No user found',
        },
      };
    } else {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: responseData,
      };
    }

    return response;
  }
}
