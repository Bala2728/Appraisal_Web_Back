import { Module } from '@nestjs/common';
import { UserEntityDetailsService } from './user_entity_details.service';
import { UserEntityDetailsController } from './user_entity_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityDetail } from './entities/user_entity_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntityDetail])],
  controllers: [UserEntityDetailsController],
  providers: [UserEntityDetailsService]
})
export class UserEntityDetailsModule {}
