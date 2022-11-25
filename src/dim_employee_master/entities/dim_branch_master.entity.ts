import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'dim_branch_master',
})
export class DimBranchMaster {
  @PrimaryGeneratedColumn({
    name: 'branch_id',
  })
  branchId: string;

  @Column({
    name: 'branch_name',
  })
  branchName: string;

  @Column({
    name: 'enable_status',
  })
  enableStatus: boolean;

  @Column({
    name: 'delete_status',
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
