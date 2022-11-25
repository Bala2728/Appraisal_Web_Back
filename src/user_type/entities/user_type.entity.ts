import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'user_detail'
})

export class UserType {
    @PrimaryGeneratedColumn('uuid',{
        name:'user_type_id'
    })
    userTypeId:string

    @Column({
        name:'user_type'
    })
    userType:string

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
        name:'is_active',
        nullable:true
    })
    isActive:boolean
}
