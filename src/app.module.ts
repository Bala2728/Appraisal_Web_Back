import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserLoginDetailsModule } from './user_login_details/user_login_details.module';
import { UserEntityDetailsModule } from './user_entity_details/user_entity_details.module';
import { DimKeyResultAreaMasterModule } from './dim_key_result_area_master/dim_key_result_area_master.module';
import { FactQualificationAddedModule } from './fact_qualification_added/fact_qualification_added.module';
import { FactTrainingRequiredModule } from './fact_training_required/fact_training_required.module';
import { UserModule } from './user/user.module';
import { DimGeneralAttributesModule } from './dim_general_attributes/dim_general_attributes.module';
import { FactGeneralAttributes2Module } from './fact_general_attributes_2/fact_general_attributes_2.module';
import { FactKeyResultAreaModule } from './fact_key_result_area/fact_key_result_area.module';
import { FactEmployeeWithAoModule } from './fact_employee_with_ao/fact_employee_with_ao.module';
import { FactEmployeeWithRoModule } from './fact_employee_with_ro/fact_employee_with_ro.module';
import { FactTrainingProgramsAttendedModule } from './fact_training_programs_attended/fact_training_programs_attended.module';
import { FactTrainingProgramsConductedModule } from './fact_training_programs_conducted/fact_training_programs_conducted.module';
import { UserTypeModule } from './user_type/user_type.module';
import { DimEmployeeMasterModule } from './dim_employee_master/dim_employee_master.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      schema: 'Appraisal_form',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserLoginDetailsModule,
    UserEntityDetailsModule,
    DimGeneralAttributesModule,
    DimKeyResultAreaMasterModule,
    FactQualificationAddedModule, 
    FactTrainingRequiredModule,
    UserModule,
    FactGeneralAttributes2Module,
    FactKeyResultAreaModule,
    FactEmployeeWithAoModule,
    FactEmployeeWithRoModule,
    FactTrainingProgramsAttendedModule,
    FactTrainingProgramsConductedModule,
    UserTypeModule,
    DimEmployeeMasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
