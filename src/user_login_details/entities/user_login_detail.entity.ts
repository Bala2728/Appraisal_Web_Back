import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user-login-details',
})
export class UserLoginDetail {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_login_id',
  })
  userLoginId: string;

  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId: string;

  @Column({
    name: 'user_type',
    nullable: true,
  })
  userType: string;

  @Column({
    name: 'login_username',
  })
  loginUsername: string;

  @Column({
    name: 'login_password',
  })
  loginPassword: string;

  @Column({
    name: 'enable_status',
  })
  enableStatus: string;

  @Column({
    name: 'delete_status',
  })
  deleteStatus: string;

  @Column({
    name: 'created_by',
    nullable: true,
  })
  createdBy: string;

  @Column({
    name: 'created_on',
    default: () => 'NOW()',
  })
  createdOn: Date;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: string;

  @Column({
    name: 'updated_on',
    default: () => 'NOW()',
  })
  updatedOn: Date;

  @Column({
    name: 'is_active',
    nullable: true,
  })
  IsActive: boolean;
}
