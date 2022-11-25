import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactEmployeeCompetencyNumericRating } from '../fact_employee_competency_numeric_rating/entities/fact_employee_competency_numeric_rating.entity';
import { FactEmployeeCompetencyWeightedScoreRating } from '../fact_employee_competency_weighted_score_rating/entities/fact_employee_competency_weighted_score_rating.entity';
import { CreateFactEmployeeCompetencyAvgScoreRatingDto } from './dto/create-fact_employee_competency_avg_score_rating.dto';
import { UpdateFactEmployeeCompetencyAvgScoreRatingDto } from './dto/update-fact_employee_competency_avg_score_rating.dto';

import {FactEmployeeCompetencyAvgScoreRating} from "./entities/fact_employee_competency_avg_score_rating.entity";

@Injectable()
export class FactEmployeeCompetencyAvgScoreRatingService {

  constructor(
    @InjectRepository(FactEmployeeCompetencyAvgScoreRating)
    private avgRatingRepo : Repository<FactEmployeeCompetencyAvgScoreRating>,

    @InjectRepository(FactEmployeeCompetencyNumericRating)
    private NumericRatingRepo : Repository<FactEmployeeCompetencyNumericRating> ,
    @InjectRepository(FactEmployeeCompetencyWeightedScoreRating)
    private weightedScoreRepo : Repository<FactEmployeeCompetencyWeightedScoreRating> 
  ){}

  async create(createFactEmployeeCompetencyAvgScoreRatingDto: CreateFactEmployeeCompetencyAvgScoreRatingDto) {
    const weightedScores = await this.weightedScoreRepo.findOne({where:{ employeeId : createFactEmployeeCompetencyAvgScoreRatingDto.employeeId}});
    let sum : number;

    let maxWeightedScore = 100;
    let maxNumericRating = 5;

    sum =  Number( weightedScores.ownershipWeightedScoreRating ) + Number(weightedScores.punctualityWeightedScoreRating ) + Number(weightedScores.resourcefulnessWeightedScoreRating )+ Number(weightedScores.responsivenessWeightedScoreRating )+ Number(weightedScores.attendanceWeightedScoreRating);
    const sectionRating =  (sum / maxWeightedScore) * maxNumericRating;

    console.log(sum);
    const avgRating : Partial <FactEmployeeCompetencyAvgScoreRating > = {
      employeeId : createFactEmployeeCompetencyAvgScoreRatingDto.employeeId,
       empWeightedAverageScoringOnCompetencies :  sum,
       sectionRating : sectionRating
    }
    const result = await this.avgRatingRepo.save(avgRating);

    return result;



  }

  findAll() {
    return `This action returns all factEmployeeCompetencyAvgScoreRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factEmployeeCompetencyAvgScoreRating`;
  }

  update(id: number, updateFactEmployeeCompetencyAvgScoreRatingDto: UpdateFactEmployeeCompetencyAvgScoreRatingDto) {
    return `This action updates a #${id} factEmployeeCompetencyAvgScoreRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} factEmployeeCompetencyAvgScoreRating`;
  }
}
