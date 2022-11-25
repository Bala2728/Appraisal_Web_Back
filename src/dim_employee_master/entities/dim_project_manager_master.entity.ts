import { Column, Entity, PrimaryGeneratedColumn,  } from "typeorm";

@Entity({name:"dim_project_manager_master"})
export class DimProjectManagerMaster{
    @PrimaryGeneratedColumn({name:"project_manager_id"})
    projectManagerId:string;
        @Column({name:"project_manager_name"})
    projectManagerName:string;
    
    @Column({
        name:'enable_status',
        nullable:true
    })
    enableStatus:boolean

    @Column({
        name:'delete_status',
        nullable:true
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