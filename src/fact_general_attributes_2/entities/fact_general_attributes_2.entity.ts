import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'fact_general_attributes',
})
export class FactGeneralAttributes2 {
  @PrimaryGeneratedColumn('uuid',{
    name: 'fact_key_competency_area_id',
  })
  factKeyCompetencyAreaId: string;

  @Column({
    name: 'user_id',
    nullable: true,
  })
  userId: string;

  @Column({
    name: 'job_domain_knowledge_rating',
    nullable: true,
  })
  jobDomainknowledgeRating: String;

  @Column({
    name: 'job_domain_knowledge_rating_manager',
    nullable: true,
  })
  jobDomainKnowledgeRatingManager: string;

  @Column({
    name: 'job_domain_knowledge_rating_head',
    nullable: true
  })
  jobDomainKnowledgeRatingHead: string
  

  @Column({
    name: 'Communication_rating',
    nullable: true,
  })
  communicationRating: string;

  @Column({
    name: 'Communication_rating_manager',
    nullable: true,
  })
  communicationRatingManager: string;

  @Column({
    name: 'Communication_rating_head',
    nullable: true
  })
  communicationRatingHead: string


  @Column({
    name: 'Effectiveness_rating',
    nullable: true,
  })
  effectivenessRating: string;

  @Column({
    name: 'Effectiveness_rating_manager',
    nullable: true,
  })
  effectivenessRatingManager: string;
  
  @Column({
    name: 'Effectiveness_rating_head',
    nullable: true
  })
  effectivenessRatingHead: string


  @Column({
    name: 'initiative_rating',
    nullable: true,
  })
  initiativeRating: string;

  @Column({
    name: 'initiative_rating_manager',
    nullable: true,
  })
  initiativeRatingManager: string;

  @Column({
    name: 'initiative_rating_head',
    nullable: true
  })
  initiativeRatingHead: string

  @Column({
    name: 'achievement_orientation_rating',
    nullable: true,
  })
  achievementOrientationRating: string;

  @Column({
    name: 'achievement_orientation_rating_manager',
    nullable: true,
  })
  achievementOrientationRatingManager: string;

  @Column({
    name: 'achievement_orientation_rating_head',
    nullable: true
  })
  achievementOrientationRatingHead: string

  @Column({
    name: 'discipline_rating',
    nullable: true,
  })
  disciplineRating: string;

  @Column({
    name: 'discipline_rating_manager',
    nullable: true,
  })
  disciplineRatingManager: string;

  @Column({
    name: 'discipline_rating_head',
    nullable: true
  })
  disciplineRatingHead: string

  @Column({
    name: 'time_management_rating',
    nullable: true,
  })
  timeManagementRating: string;

  @Column({
    name: 'time_management_rating_manager',
    nullable: true,
  })
  timeManagementRatingManager: string;

  @Column({
    name: 'time_management_rating_head',
    nullable: true
  })
  timeManagementRatingHead: string

  @Column({
    name: 'team_work_rating',
    nullable: true,
  })
  teamWorkRating: string;

  @Column({
    name: 'team_work_rating_manager',
    nullable: true,
  })
  teamWorkRatingManager: string;

  @Column({
    name: 'team_work_rating_head',
    nullable: true
  })
  teamWorkRatingHead: string

  @Column({
    name: 'adaptability_rating',
    nullable: true,
  })
  adaptabilityRating: string;

  @Column({
    name: 'adaptability_rating_manager',
    nullable: true,
  })
  adaptabilityRatingManager: string;

  @Column({
    name: 'adaptability_rating_head',
    nullable: true
  })
  adaptabilityRatingHead: string

  @Column({
    name: 'customer_orientation_rating',
    nullable: true,
  })
  customerOrientationRating: string;

  @Column({
    name: 'customer_orientation_rating_manager',
    nullable: true,
  })
  customerOrientationRatingManager: string;

  @Column({
    name: 'customer_orientaion_rating_head',
    nullable: true
  })
  customerOrientaionRatingHead: string

  @Column({
    name: 'enable_status',
    nullable: true,
  })
  enableStatus: string;

  @Column({
    name: 'delete_status',
    nullable: true,
  })
  deleteStatus: string;

  @Column({
    name: 'created_by',
    nullable: true,
  })
  createdBy: string;

  @Column({
    name: 'created_on',
    default: () => 'NOW()',
  })
  createdOn: Date;

  @Column({
    name: 'updated_by',
    nullable: true,
  })
  updatedBy: string;

  @Column({
    name: 'updated_on',
    default: () => 'NOW()',
  })
  updatedOn: Date;

  @Column({
    name: 'is_active',
    nullable: true,
  })
  isActive: boolean;
}
