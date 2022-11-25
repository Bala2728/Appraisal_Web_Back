import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fact_key_result_area' })

export class FactKeyResultArea {

  @PrimaryGeneratedColumn('uuid',{
    name: 'fact_key_result_area_id',
  })
  factKeyResultAreaId: string;


  @Column({
    name: 'user_id',
  })
  userId: string;

  @Column({
    name: 'schedule_slippage_rating',
  })
  scheduleSlippageRating: string;

  @Column({
    name: 'schedule_slippage_rating_manager',
    nullable: true,
  })
  scheduleSlippageRatingManager: string;

  @Column({
    name: 'schedule_slippage_rating_head',
    nullable: true,
  })
  scheduleSlippageRatingHead: string;

  @Column({
    name: 'effort_variance_rating',
  })
  effortVarianceRating: string;

  @Column({
    name: 'effort_variance_rating_manager',
    nullable: true,
  })
  effortVarianceRatingManager: string;

  @Column({
    name: 'effort_variance_rating_head',
    nullable: true,
  })
  effortVarianceRatingHead: string;

  @Column({
    name: 'adherence_to_slas_rating',
  })
  adherenceToSlasRating: string;

  @Column({
    name: 'adherence_to_slas_rating_manager',
    nullable: true,
  })
  adherenceToSlasRatingManager: string;

  @Column({
    name: 'adherence_to_slas_rating_head',
    nullable: true,
  })
  adherenceToSlasRatingHead: string;

  @Column({
    name: 'post_shipment_defect_management_rating',
  })
  postShipmentDefectManagementRating: string;

  @Column({
    name: 'post_shipment_defect_management_rating_manager',
    nullable: true,
  })
  postShipmentDefectManagementRatingManager: string;

  @Column({
    name: 'post_shipment_defect_management_rating_head',
    nullable: true,
  })
  postShipmentDefectManagementRatingHead: string;

  @Column({
    name: 'post_development_quality_rating',
    nullable: true,
  })
  postDevelopmentQualityRating: string;

  @Column({
    name: 'post_development_quality_rating_manager',
    nullable: true,
  })
  postDevelopmentQualityRatingManager: string;

  @Column({
    name: 'post_development_quality_rating_head',
    nullable: true,
  })
  postDevelopmentQualityRatingHead: string;

  @Column({
    name: 'knowledge_enhancement_rating',
  })
  knowledgeEnhancementRating: string;

  @Column({
    name: 'knowledge_enhancement_rating_manager',
    nullable: true,
  })
  knowledgeEnhancementRatingManager: string;

  @Column({
    name: 'knowledge_enhancement_rating_head',
    nullable: true,
  })
  knowledgeEnhancementRatingHead: string;

  @Column({
    name: 'process_compliance_rating',
  })
  processComplianceRating: string;

  @Column({
    name: 'process_compliance_rating_manager',
    nullable: true,
  })
  processComplianceRatingManager: string;

  @Column({
    name: 'process_compliance_rating_head',
    nullable: true,
  })
  processComplianceRatingHead: string;

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
