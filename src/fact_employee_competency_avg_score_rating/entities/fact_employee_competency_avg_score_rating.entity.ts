import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"fact_employee_competency_avg_score_rating"
})
export class FactEmployeeCompetencyAvgScoreRating {
    @PrimaryGeneratedColumn({name:"employee_competency_avg_score_id"})
    employeeCompetencyAvgScoreId:string;
    @Column({name:"employee_id"})
    employeeId:string;
    @Column({name:"emp_weighted_average_scoring_on_competencies"})
    empWeightedAverageScoringOnCompetencies: number;

    @Column({name : "emp_section_rating"})
    sectionRating : number;



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
