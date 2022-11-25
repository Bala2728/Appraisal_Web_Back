import { Module } from '@nestjs/common';
import { UserTypeService } from './user_type.service';
import { UserTypeController } from './user_type.controller';
import { UserType } from './entities/user_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserType])],
  controllers: [UserTypeController],
  providers: [UserTypeService]
})
export class UserTypeModule {}
