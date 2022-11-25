import { Module } from '@nestjs/common';
import { UserLoginDetailsService } from './user_login_details.service';
import { UserLoginDetailsController } from './user_login_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLoginDetail } from './entities/user_login_detail.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLoginDetail, User])],
  controllers: [UserLoginDetailsController],
  providers: [UserLoginDetailsService],
})
export class UserLoginDetailsModule {}
