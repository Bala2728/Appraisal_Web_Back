import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dim_competency_master'
})

export class DimCompetencyMaster{
    @PrimaryGeneratedColumn({
        name:'competency_id'
    })
    competencyId:string

    @Column({
        name:'employee_id'
    })
    employeeId:string

    @Column({
        name:'competency_name'
    })
    competencyName:string

    @Column({
        name:'item_numeric_rating'
    })
    itemNumericRating:number

    @Column({
        name:'max_numeric_rating'
    })
    maxNumericRating:number

    @Column({
        name:'decimal_score'
    })
    decimalScore:number

    @Column({
        name:'weight'
    })
    weight:number

    @Column({
        name:'weighted'
    })
    weighted:number

    @Column({
        name:'weighted_average_scoring_on_competencies'
    })
    weightedAverageScoringOnCompetencies:number

    @Column({
        name:'enable_status',
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