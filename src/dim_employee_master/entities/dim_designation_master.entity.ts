import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dim_designation_master'
})

export class DimDesignationMaster{
    @PrimaryGeneratedColumn({
        name:'designation_id'
    })
    designationId:string

    
 

    @Column({
        name:'designation_name'
    })
    designationName:string

    @Column({
        name:'enable_status'
    })
    enableStatus:boolean

    @Column({
        name:'delete_status'
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