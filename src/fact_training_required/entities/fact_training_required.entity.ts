import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'fact_training_required'
})
export class FactTrainingRequired {
    @PrimaryGeneratedColumn('uuid',{
        name: 'training_required_id'

    })
    trainingRequiredId:string

    @Column({
        name: 'user_id'
    })
    userId: string

    @Column({
        name: 'appraisee_comments'

    })
    appraiseeComments:  string

    @Column({
        name: 'appraiser_comments'

    })
    appraiserComments: string

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
        nullable:true,
    
      })
      createdBy: string
    
      @Column({
        name: 'created_on',
        default: () => 'NOW()',
    
      })
      createdOn: Date
    
      @Column({
        name: 'updated_by',
        nullable:true,
    
      })
      updatedBy: string
    
      @Column({
        name: 'updated_on',
        default: () => 'NOW()',
    
      })
      updatedOn: Date

      @Column({
        name: 'is_active',
        nullable:true
      })
      isActive: boolean



}
