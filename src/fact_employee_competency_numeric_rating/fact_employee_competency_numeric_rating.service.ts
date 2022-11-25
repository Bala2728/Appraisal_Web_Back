import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFactEmployeeCompetencyNumericRatingDto } from './dto/create-fact_employee_competency_numeric_rating.dto';
import { UpdateFactEmployeeCompetencyNumericRatingDto } from './dto/update-fact_employee_competency_numeric_rating.dto';
import { FactEmployeeCompetencyNumericRating } from './entities/fact_employee_competency_numeric_rating.entity';

@Injectable()
export class FactEmployeeCompetencyNumericRatingService {
  constructor(@InjectRepository(FactEmployeeCompetencyNumericRating) private factEmployeeCompetencyNumericRatingRepository:Repository<FactEmployeeCompetencyNumericRating>){}
  async create(createFactEmployeeCompetencyNumericRatingDto: CreateFactEmployeeCompetencyNumericRatingDto) {
    try {
      const factEmpRating : Partial <FactEmployeeCompetencyNumericRating> = createFactEmployeeCompetencyNumericRatingDto;
      
      
      factEmpRating.ownershipDecimalScore = this.calculateDecimalScore(createFactEmployeeCompetencyNumericRatingDto.ownershipNumericRating) 
      factEmpRating.responsivenessDecimalScore = this.calculateDecimalScore(createFactEmployeeCompetencyNumericRatingDto.responsivenessNumericRating) 
      factEmpRating.resourcefulnessDecimalScore = this.calculateDecimalScore(createFactEmployeeCompetencyNumericRatingDto.resourcefulnessNumericRating) 
      factEmpRating.attendanceDecimalScore = this.calculateDecimalScore(createFactEmployeeCompetencyNumericRatingDto.attendanceNumericRating) 
      factEmpRating.punctualityDecimalScore = this.calculateDecimalScore(createFactEmployeeCompetencyNumericRatingDto.punctualityNumericRating) 



      const db =  await this.factEmployeeCompetencyNumericRatingRepository.save(factEmpRating);
      console.log(db);
      return db;
    }
    catch(err){
      console.log("errrr");
      console.log(err);
      return err;
    }

  }

  calculateDecimalScore(score) {
    const decimal = score/5;
    return decimal;
  }


  async factEmployeeCompetencyNumericRating(createFactEmployeeCompetencyNumericRatingDto: CreateFactEmployeeCompetencyNumericRatingDto){
    let max_numeric_rating = await this.factEmployeeCompetencyNumericRatingRepository
    .createQueryBuilder()
    .select("max_numeric_rating")
    .where("ownership_numeric_rating = 'Ownership'")

    let decimal_score = createFactEmployeeCompetencyNumericRatingDto.ownershipNumericRating / max_numeric_rating[0].max_numeric_rating 
    console.log(decimal_score,"output");
    
  }

  findAll() {
    return `This action returns all factEmployeeCompetencyNumericRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factEmployeeCompetencyNumericRating`;
  }

  update(id: number, updateFactEmployeeCompetencyNumericRatingDto: UpdateFactEmployeeCompetencyNumericRatingDto) {
    return `This action updates a #${id} factEmployeeCompetencyNumericRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} factEmployeeCompetencyNumericRating`;
  }
}
