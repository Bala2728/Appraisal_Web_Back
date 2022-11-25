import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'dim_general_attribute',
})
export class DimGeneralAttribute {
  @PrimaryGeneratedColumn('uuid',{
    name: 'key_competency_area_id'
  })
  keyCompetencyAreaId: string;


  @Column({
    name: 'key_competency_area'

  })
  keyCompetencyArea: string

  @Column({
    name: 'key_competency_area_description'

  })
  keyCompetencyAreaDescription: string

  @Column({
    name: 'enable_status'

  })
  enableStatus: string

  @Column({
    name: 'delete_status'

  })
  deleteStatus: string

  @Column({
    name: 'created_by',
    nullable: true

  })
  createdBy: string

  @Column({
    name: 'created_on',
    default: () => 'NOW()',

  })
  createdOn: Date

  @Column({
    name: 'updated_by',
    nullable: true

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
