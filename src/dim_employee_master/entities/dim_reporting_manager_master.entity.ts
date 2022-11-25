import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'dim_reporting_manager_master' })
export class DimReportingManagerMaster {
  @PrimaryGeneratedColumn({ name: 'reporting_manager_id' })
  reportingManagerId: string;
  @Column({ name: 'reporting_manager_name' })
  reportingManagerName: string;

  @Column({
    name: 'enable_status',
    nullable: true,
  })
  enableStatus: boolean;

  @Column({
    name: 'delete_status',
    nullable: true,
  })
  deleteStatus: boolean;

  @Column({
    name: 'created_by',
  })
  createdBy: string;

  @Column({
    name: 'created_on',
    default: () => 'NOW()',
  })
  createdOn: Date;

  @Column({
    name: 'updated_by',
  })
  updatedBy: string;

  @Column({
    name: 'updated_on',
    default: () => 'NOW()',
  })
  updatedOn: Date;

  @Column({
    name: 'is_active',
  })
  isActive: boolean;
}
