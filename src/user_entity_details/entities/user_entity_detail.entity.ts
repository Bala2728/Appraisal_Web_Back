import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user_entity_detail',
})
export class UserEntityDetail {
  @PrimaryGeneratedColumn('uuid',{
    name: 'user_entity_id',
  })
  userEntityId: string;

  @Column({
    name: 'login_username',
  })
  loginUsername: string;

  @Column({
    name: 'login_password',
  })
  loginPassword: string;

  @Column({
    name: 'user_name',
  })
  userName: string;

  @Column({
    name: 'user_id',
  })
  userId: string;

  @Column({
    name: 'designation',
  })
  designation: string;

  @Column({
    name: 'date_of_joining',
  })
  dateOfJoining: Date;
  

  @Column({
    name: 'role',
  })
  role: string;

  @Column({
    name: 'department',
  })
  department: string;

  @Column({
    name: 'qualifications'

  })
  qualifications: string

  @Column({
    name: 'grade_level'

  })
  gradeLevel: string

  @Column({
    name: 'total_experience'

  })
  totalExperience: string

  @Column({
    name: 'primary_skill'

  })
  primarySkill: string

  @Column({
    name: 'interchange_exp'

  })
  interchangeExp: string

  @Column({
    name: 'performance_assessment_period'

  })
  performanceAssessmentPeriod: string

  
  @Column({
    name: 'gender',
    nullable: true,
  })
  gender: string;

  @Column({
    name: 'employer_type',
    nullable: true,
  })
  employerType: string;

  @Column({
    name: 'branch',
    nullable: true,
  })
  branch: string;

  @Column({
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'mobile_number',
    nullable: true,
  })
  mobileNumber: string;

  @Column({
    name: 'spine_access',
    nullable: true,
  })
  spineAccess: string;

  @Column({
    name: 'medi_claim',
    nullable: true,
  })
  mediClaim: string;

  @Column({
    name: 'enable_status',
    nullable: true
  })
  enableStatus: string

  @Column({
    name: 'delete_status',
    nullable: true

  })
  deleteStatus: string

  @Column({
    name: 'created_by',
    nullable:true,

  })
  createdBy: string

  @Column({
    name: 'created_on',
    default: () => 'NOW()',

  })
  createdOn: Date

  @Column({
    name: 'updated_by',
    nullable:true,

  })
  updatedBy: string

  @Column({
    name: 'updated_on',
    default: () => 'NOW()',

  })
  updatedOn: Date

  @Column({
    name: 'is_active',
    nullable: true

  })
  isActive: boolean











}
