import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FactGeneralAttributes2 } from 'src/fact_general_attributes_2/entities/fact_general_attributes_2.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      FactGeneralAttributes2,
      
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
