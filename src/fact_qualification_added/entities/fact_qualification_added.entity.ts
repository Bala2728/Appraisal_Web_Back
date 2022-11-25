import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'fact_qualifucation_added'
})
export class FactQualificationAdded {
    @PrimaryGeneratedColumn('uuid',{
        name: 'qualification_added_id'

    })
    qualificationAddedId: string

    @Column({
        name: 'user_id'

    })
    userId: string

    @Column({
        name: 'qualification_certification_title'

    })
    qualificationCertificationTitle: string

    @Column({
        name: 'institute_university'

    })
    instituteUniversity: string

    @Column({
        name: 'percentage'

    })
    percentage: string

    @Column({
        name: 'upload_certificates'

    })
    uploadCertificates: string

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
        default: ()=> 'NOW()'
    })
    updatedOn: Date

    @Column({
        name: 'is_active',
        nullable:true

    })
    isActive: boolean









}
