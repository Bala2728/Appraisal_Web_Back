import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FactGeneralAttributes2 } from 'src/fact_general_attributes_2/entities/fact_general_attributes_2.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ApiResponse, ApiResponseStatus } from '../config/response';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(FactGeneralAttributes2)
    private factGeneralAttributes2Repository: Repository<FactGeneralAttributes2>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ApiResponse<User>> {
  

    try {
      let user = new User();
      // user.userTypeId = createUserDto.userTypeId
      user.userName = createUserDto.userName;
      user.userId = createUserDto.userId;
      user.role = createUserDto.role;
      user.dateOfJoining = createUserDto.dateOfJoining;
      user.designation = createUserDto.designation;
      user.department = createUserDto.department;
      user.qualifications = createUserDto.qualifications;
      user.gradeLevel = createUserDto.gradeLevel;
      user.totalExperience = createUserDto.totalExperience;
      user.primarySkill = createUserDto.primarySkill;
      user.organizationExp = createUserDto.organizationExp;
      user.performanceAssessmentPeriod =
        createUserDto.performanceAssessmentPeriod;
      user.gender = createUserDto.gender;
      user.employerType = createUserDto.employerType;
      user.branch = createUserDto.branch;
      user.email = createUserDto.email;
      user.mobileNumber = createUserDto.mobileNumber;
      user.spineAccess = createUserDto.spineAccess;
      user.mediClaim = createUserDto.mediClaim;
      user.projectName = createUserDto.projectName
      user.projectManager = createUserDto.projectManager
      user.reportingManager = createUserDto.reportingManager
      user.enableStatus = createUserDto.enableStatus;
      user.deleteStatus = createUserDto.deleteStatus;
      user.createdBy = createUserDto.createdBy;
      user.isActive = createUserDto.isActive;

      let saved_user = await this.userRepository.save(user);

      saved_user.userId;
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: saved_user,
      };
      return response;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<ApiResponse<User[]>> {
    let user = await this.userRepository.find();
    let responseData = [];
    responseData.push({
      'user': user,
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: responseData,
    };
    return response;
  }

  async findOne(id: string): Promise<ApiResponse<User>> {
    let find_one_user = await this.userRepository.findOne({
      where: { userId: id },
    });
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: find_one_user,
    };
    return response;
  }

  async update(updateUserDto: UpdateUserDto): Promise<ApiResponse<User>> {
    let user = await this.userRepository.findOne({
      where: { userId: updateUserDto.userMasterId },
    });
    let user_data = { ...user, ...updateUserDto };

    let saved_user = await this.userRepository.save(user_data);
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_user,
    };
    return response;
  }

  async remove(id: string): Promise<ApiResponse<DeleteResult>> {
    let response = await this.userRepository.delete({ userId: id });
    let result = {
      status: ApiResponseStatus.SUCCESS,
      data: response,
    };
    return result;
  }




  
  // async list(createUserDto:CreateUserDto){
  //     let employee_list= await this.userRepository.find();
  //     .createQueryBuilder()
  //     .select(['userId', 'userName', 'role'])
  //     .where('user_id = :userId', {
  //       userId: createUserDto.userId,
  //     })
  //     .andWhere('user_name = :userName', {
  //       userName : createUserDto.userName,
  //     })
  //     .andWhere('role = :role', {
  //       role : createUserDto.role,
  //     })
  //     .execute();
  //     let response:ApiResponse<User>;
  //     let responseData = [];
  //     responseData.push({
  //       'employee_list': employee_list
  //     })
  //     console.log(employee_list);

  //     return response;
  // }
}
