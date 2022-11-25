import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'dim_key_result_area_master'
})
export class DimKeyResultAreaMaster {
    @PrimaryGeneratedColumn('uuid',{
        name: 'key_result_area_id'

    })
    keyResultAreaId: string

    @Column({
        name: 'key_result_area_heading'

    })
    keyResultAreaHeading: string

    @Column({
        name: 'key_result_area_heading_description'

    })
    keyResultAreaHeadingDescription: string

    @Column({
        name: 'key_result_area_sub_heading'

    })
    keyResultAreaSubHeading: string

    @Column({
        name: 'key_result_area_sub_heading_description'

    })
    keyResultAreaSubHeadingDescription: string

    @Column({
        name: 'percentage_weightage'

    })
    percentageWeightage: string

    @Column({
        name: 'enable_status'

    })
    enableStatus: string

    @Column({
        name: 'delete_status'

    })
    deleteStatus: string

    @Column({
        name: 'created_by',
        nullable: true

    })
    createdBy: string

    @Column({
        name: 'created_on',
        default: () => 'NOW()'

    })
    createdOn: Date

    @Column({
        name: 'updated_by',
        nullable: true

    })
    updatedBy: string

    @Column({
        name: 'updated_on',
        default: () => 'NOW()'

    })
    updatedOn: Date

    @Column({
        name: 'is_active',
        nullable: true

    })
    isActive: boolean




}
