import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"fact_employee_competency_numeric_rating"})
export class FactEmployeeCompetencyNumericRating {
    @PrimaryGeneratedColumn({name:"employee_competency_numeric_id"})
    employeeCompetencyNumericId:string;
    @Column({name:"employee_id"})
    employeeId:string;
    @Column({name:"ownership_numeric_rating"})
    ownershipNumericRating:number;
    @Column({name:"attendance_numeric_rating"})
    attendanceNumericRating:number;
    @Column({name:"punctuality_numeric_rating"})
    punctualityNumericRating:number;
    @Column({name:"responsiveness_numeric_rating"})
    responsivenessNumericRating:number;
    @Column({name:"resourcefulness_numeric_rating"})
    resourcefulnessNumericRating:number;

    /// decimal scores
    @Column({name:"ownership_decimal_score"})
    ownershipDecimalScore:number;
    @Column({name:"attendance_decimal_score"})
    attendanceDecimalScore:number;
    @Column({name:"punctuality_decimal_score"})
    punctualityDecimalScore:number;
    @Column({name:"responsiveness_decimal_score"})
    responsivenessDecimalScore:number;
    @Column({name:"resourcefulness_decimal_score"})
    resourcefulnessDecimalScore:number;
    


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

