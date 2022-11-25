import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"fact_employee_competency_weighted_score_rating"})
export class FactEmployeeCompetencyWeightedScoreRating {
    @PrimaryGeneratedColumn({name:"employee_competency_weighted_score_id"})
    factEmployeeCompetencyWeightedScoreId:string;
    @Column({name:"employee_id"})
    employeeId:string;
    @Column({name:"ownership_weighted_score_rating"})
    ownershipWeightedScoreRating:number;
    @Column({name:"attendance_weighted_score_rating"})
    attendanceWeightedScoreRating:number;
    @Column({name:"punctuality_weighted_score_rating"})
    punctualityWeightedScoreRating:number;
    @Column({name:"responsiveness_weighted_score_rating"})
    responsivenessWeightedScoreRating:number;
    @Column({name:"resourcefulness_weighted_score_rating"})
    resourcefulnessWeightedScoreRating:number;
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
