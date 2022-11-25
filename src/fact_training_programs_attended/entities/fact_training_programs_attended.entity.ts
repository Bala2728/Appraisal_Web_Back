import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'fact_training_program_attended'
})

export class FactTrainingProgramsAttended {
    @PrimaryGeneratedColumn('uuid',{
        name:'training_program_attended_id'
    })
    trainingProgramAttendedId:string

    @Column({
        name:'user_id'
    })
    userId:string

    @Column({
        name:'title_of_the_programme_attened'
    })
    titleOfTheProgrammeAttended:string

    @Column({
        name:'duration'
    })
    duration:string

    @Column({
        name:'trainer_details'
    })
    trainerDetails:string

    @Column({
        name:'enable_status'
    })
    enableStatus:string

    @Column({
        name:'delete_status'
    })
    deleteStatus:string

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
        name:'is_active'
    })
    isActive:boolean
}
