import { ApiProperty } from "@nestjs/swagger";

export class CreateFactKeyResultAreaDto {
    @ApiProperty()
    userId: string;
    @ApiProperty()
    scheduleSlippageRating: string;
    @ApiProperty()
    scheduleSlippageRatingManager: string;
    @ApiProperty()
    scheduleSlippageRatingHead: string;
    @ApiProperty()
    effortVarianceRating: string;
    @ApiProperty()
    effortVarianceRatingManager: string;
    @ApiProperty()
    effortVarianceRatingHead: string;
    @ApiProperty()
    adherenceToSlasRating: string;
    @ApiProperty()
    adherenceToSlasRatingManager: string;
    @ApiProperty()
    adherenceToSlasRatingHead: string;
    @ApiProperty()
    postShipmentDefectManagementRating: string;
    @ApiProperty()
    postShipmentDefectManagementRatingManager: string;
    @ApiProperty()
    postShipmentDefectManagementRatingHead: string;
    @ApiProperty()
    postDevelopmentQualityRating: string;
    @ApiProperty()
    postDevelopmentQualityRatingManager: string;
    @ApiProperty()
    postDevelopmentQualityRatingHead: string;
    @ApiProperty()
    knowledgeEnhancementRating: string;
    @ApiProperty()
    knowledgeEnhancementRatingManager: string;
    @ApiProperty()
    knowledgeEnhancementRatingHead: string;
    @ApiProperty()
    processComplianceRating: string;
    @ApiProperty()
    processComplianceRatingManager: string;
    @ApiProperty()
    processComplianceRatingHead: string;
    @ApiProperty()
    createdBy: string;
    @ApiProperty()
    createdOn: Date;
    @ApiProperty()
    updatedBy: string;
    @ApiProperty()
    updatedOn: Date;
    @ApiProperty()
    isActive: boolean;

}