import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { threadId } from 'worker_threads';
import { CreateFactEmployeeCompetencyWeightedScoreRatingDto } from './dto/create-fact_employee_competency_weighted_score_rating.dto';
import { UpdateFactEmployeeCompetencyWeightedScoreRatingDto } from './dto/update-fact_employee_competency_weighted_score_rating.dto';
import { FactEmployeeCompetencyNumericRating } from '../fact_employee_competency_numeric_rating/entities/fact_employee_competency_numeric_rating.entity';
import { FactEmployeeCompetencyWeightedScoreRating } from './entities/fact_employee_competency_weighted_score_rating.entity';

@Injectable()
export class FactEmployeeCompetencyWeightedScoreRatingService {
  constructor(
    @InjectRepository(FactEmployeeCompetencyNumericRating)
    private NumericRatingRepo : Repository<FactEmployeeCompetencyNumericRating> ,
    @InjectRepository(FactEmployeeCompetencyWeightedScoreRating)
    private weightedScoreRepo : Repository<FactEmployeeCompetencyWeightedScoreRating> 
  ){}

  async create(createFactEmployeeCompetencyWeightedScoreRatingDto: CreateFactEmployeeCompetencyWeightedScoreRatingDto) {
      const employeeData =await this.NumericRatingRepo.findOne({where : { employeeId : createFactEmployeeCompetencyWeightedScoreRatingDto.employeeId}});
      console.log(employeeData);


      if (!employeeData){ throw new HttpException("No employee Data found for this id ",400); }

      const weightedScore : Partial<FactEmployeeCompetencyWeightedScoreRating> = {
        employeeId : createFactEmployeeCompetencyWeightedScoreRatingDto.employeeId,
        ownershipWeightedScoreRating : this.calculateWeightedScore (employeeData.ownershipDecimalScore,"ownership"),
        resourcefulnessWeightedScoreRating : this.calculateWeightedScore (employeeData.resourcefulnessDecimalScore,"responsiveness"),
        responsivenessWeightedScoreRating : this.calculateWeightedScore (employeeData.responsivenessDecimalScore,"resourcefulness"),
        punctualityWeightedScoreRating : this.calculateWeightedScore(employeeData.punctualityDecimalScore,"punctuality"),
        attendanceWeightedScoreRating : this.calculateWeightedScore(employeeData.attendanceDecimalScore,"attendance")
      };

      const  response =await  this.weightedScoreRepo.save(weightedScore);
      return response;
  } 

  calculateWeightedScore(score : number,weightName ?: string){
    // const  weight = score * 20;
    let weight :number;
    if (weightName.toLowerCase() === "ownership"){
      weight = 15;
    }
    else if(weightName.toLowerCase() === "responsiveness"){
      weight = 30;
    }
    else if(weightName.toLowerCase() === "resourcefulness"){
      weight = 15;
    }
    else if(weightName.toLowerCase() === "punctuality"){
      weight = 20;
    }
    else if(weightName.toLowerCase() === "attendance"){
      weight = 20;
    }

    return score * weight;
  }

  findAll() {
    return `This action returns all factEmployeeCompetencyWeightedScoreRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factEmployeeCompetencyWeightedScoreRating`;
  }

  update(id: number, updateFactEmployeeCompetencyWeightedScoreRatingDto: UpdateFactEmployeeCompetencyWeightedScoreRatingDto) {
    return `This action updates a #${id} factEmployeeCompetencyWeightedScoreRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} factEmployeeCompetencyWeightedScoreRating`;
  }
}
