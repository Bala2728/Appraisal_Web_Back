import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dim_department_master'
})

export class DimDepartmentMaster{
    @PrimaryGeneratedColumn({
        name:'department_id'
    })
    departmentId:string

    

    @Column({
        name:'department_name'
    })
    departmentName:string

    @Column({
        name:'enable_status',
        nullable:true
    })
    enableStatus:boolean

    @Column({
        name:'delete_status',
        nullable:true
    })
    deleteStatus:boolean

    @Column({
        name:'created_by'
    })
    createdBy:string

    @Column({
        name:'created_on',
        default: () => 'NOW()'
    })
    createdOn:Date

    @Column({
        name:'updated_by'
    })
    updatedBy:string

    @Column({
        name:'updated_on',
        default: () => 'NOW()'
    })
    updatedOn:Date

    @Column({
        name:'is_active'
    })
    isActive:boolean
}