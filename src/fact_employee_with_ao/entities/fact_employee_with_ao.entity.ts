import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'fact_employee_with_AO'
})
export class FactEmployeeWithAo {
   
    @PrimaryGeneratedColumn('uuid',{
        name:'appraising_officer_id'
    })
    appraisingOfficerId:string

    @Column({
        name:'user_id'
    })
    userId:string

    @Column({
        name:'appraising_officer_name'
    })
    appraisingOfficerName:string

    @Column({
        name:'start_time',
        nullable:true
        
    })
    appraisingOfficerStartTime:Date

    @Column({
        name:'end_time',
        nullable:true
    })
    appraisingOfficerEndTime:Date

    @Column({
        name:'enable_status',
        nullable:true
    })
    enableStatus:string

    @Column({
        name:'delete_status',
        nullable: true
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
