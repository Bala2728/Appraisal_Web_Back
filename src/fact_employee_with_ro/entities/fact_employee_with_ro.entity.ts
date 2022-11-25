import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'fact_employee_with_RO'
})
export class FactEmployeeWithRo {
    @PrimaryGeneratedColumn('uuid',{
            name:'reviewing_officer_id'
    })
    reviewingOfficerId:string

    @Column({
        name:'user_id'
    })
    userId:string

    @Column({
        name:'reviewing_officer_name'
    })
    reviewingOfficerName:string

    @Column({
        name:'start_time'
    })
    reviewingOfficerStartTime:Date

    @Column({
        name:'end_time'
    })
    reviewingOfficerEndTime:Date

    @Column({
        name:'enable_status',
        nullable:true
    })
    enableStatus:string

    @Column({
        name:'delete_status',
        nullable:true
    })
    deleteStatus:string

    @Column({
        name:'created_by',
        nullable:true 
    })
    createdBy:string

    @Column({
        name:'created_on',
        default: () => 'NOW()'
    })
    createdOn:Date

    @Column({
        name:'updated_by',
        nullable:true
    })
    updatedBy:string

    @Column({
        name:'updated_on',
        default: () => 'NOW()'
    })
    updatedOn:Date

    @Column({
        name:'is_active',
        nullable:true
    })
    isActive:boolean
    
}
