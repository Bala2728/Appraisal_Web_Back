import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dim_grade_master'
})

export class DimGradeMaster{
    @PrimaryGeneratedColumn({
        name:'grade_id'
    })
    gradeId:string


    @Column({
        name:'grade_type',
        nullable:true
    })
    gradeType:string

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