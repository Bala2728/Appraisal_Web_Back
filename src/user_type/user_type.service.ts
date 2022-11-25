import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ApiResponse, ApiResponseStatus } from '../config/response';
import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
import { UserType } from './entities/user_type.entity';

@Injectable()
export class UserTypeService {
  constructor (@InjectRepository(UserType) private userTypeRepository:Repository<UserType>){}
async  create(createUserTypeDto: CreateUserTypeDto):Promise<ApiResponse<UserType>> {
  
  try{
    
    let user_type = new UserType()


    user_type.userType = createUserTypeDto.userType
    
    
    user_type.enableStatus = createUserTypeDto.enableStatus
    
    
    user_type.deleteStatus = createUserTypeDto.deleteStatus
    
    
    user_type.createdBy = createUserTypeDto.createdBy
    
    
    user_type.isActive = createUserTypeDto.isActive
    
    let saved_user_type = await this.userTypeRepository.save(user_type)
   let response = {
     status:ApiResponseStatus.SUCCESS,
     data: saved_user_type
   }
     return response ;
    }catch(error){
      return error.message
    }
   }

  async findAll():Promise<ApiResponse<UserType[]>> {
    let user_type = await this.userTypeRepository.find()
    let responseData = []
    responseData.push({
      "user_type":user_type
    })
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:responseData
    }
    return response;
  }

  async findOne(id: string):Promise<ApiResponse<UserType>> {
    let find_one_user_type = await this.userTypeRepository.findOne({where:{userTypeId:id}})
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:find_one_user_type
    }
    return response;
  }

  async update(updateUserTypeDto: UpdateUserTypeDto):Promise<ApiResponse<UserType>> {
    let user_type = await this.userTypeRepository.findOne({where:{userTypeId:updateUserTypeDto.userTypeId}})
    let user_type_data = {...user_type,...updateUserTypeDto}
    user_type_data.userType = updateUserTypeDto.userType
    user_type_data.enableStatus = updateUserTypeDto.enableStatus
    user_type_data.deleteStatus = updateUserTypeDto.deleteStatus
    user_type_data.updatedBy = updateUserTypeDto.updatedBy
    user_type_data.isActive = updateUserTypeDto.isActive

    let saved_user_type = await this.userTypeRepository.save(user_type_data)
    let response = {
      status:ApiResponseStatus.SUCCESS,
      data:saved_user_type
    }
    return response;
  }

 async remove(id: string):Promise<ApiResponse<DeleteResult>> {
  let response = await this.userTypeRepository.delete({userTypeId:id})
  let result = {
    status:ApiResponseStatus.SUCCESS,
    data:response
  }
    return result;
  }
}
