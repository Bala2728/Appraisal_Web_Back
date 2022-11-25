import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'fact_employee_competency_rating'
})

export class FactEmployeeCompetencyRating {
    @PrimaryGeneratedColumn({
        name:'employee_competency_id'
    })
    employeeCompetencyId:string

    @Column({
        name:'employee_id'
    })
    employeeId:string

    @Column({
        name:'emp_competency_name'
    })
    empCompetencyName:string

    @Column({
        name:'emp_item_numeric_rating'
    })
    empItemNumericRating:number

    @Column({
        name:'emp_max_numeric_rating'
    })
    empMaxNumericRating:number

    @Column({
        name:'emp_decimal_score'
    })
    empDecimalScore:number

    @Column({
        name:'emp_weight'
    })
    empWeight:number

    @Column({
        name:'emp_weighted'
    })
    empWeighted:number

    @Column({
        name:'emp_weighted_average_scoring_on_competencies'
    })
    empWeightedAverageScoringOnCompetencies:string

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
