import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseStatus } from '../config/response';
import { CompetencyDto } from './dto/compentency.dto';
import { CreateFactEmployeeCompetencyRatingDto } from './dto/create-fact_employee_competency_rating.dto';
import { UpdateFactEmployeeCompetencyRatingDto } from './dto/update-fact_employee_competency_rating.dto';
import { DimCompetencyMaster } from './entities/dim_competency_master.entity';
import { FactEmployeeCompetencyRating } from './entities/fact_employee_competency_rating.entity';

import { FactEmployeeCompetencyNumericRatingService } from '../fact_employee_competency_numeric_rating/fact_employee_competency_numeric_rating.service';
import { FactEmployeeCompetencyWeightedScoreRatingService } from '../fact_employee_competency_weighted_score_rating/fact_employee_competency_weighted_score_rating.service';
import { FactEmployeeCompetencyAvgScoreRatingService } from '../fact_employee_competency_avg_score_rating/fact_employee_competency_avg_score_rating.service';

@Injectable()
export class FactEmployeeCompetencyRatingService {
  constructor(
    private FactEmployeeCompetencyNumericRatingService: FactEmployeeCompetencyNumericRatingService,
    private FactEmployeeCompetencyWeightedScoreRatingService: FactEmployeeCompetencyWeightedScoreRatingService,
    private FactEmployeeCompetencyAvgScoreRatingService: FactEmployeeCompetencyAvgScoreRatingService,
  ) {}

  async factEmployeeCompetencyRatingService(
    CreateFactEmployeeCompetencyNumericRatingDto: CompetencyDto,
  ) {
    console.log(CreateFactEmployeeCompetencyNumericRatingDto, 'drom final');
    const numericRatings =
      await this.FactEmployeeCompetencyNumericRatingService.create(
        CreateFactEmployeeCompetencyNumericRatingDto,
      );
    const weightedRating =
      await this.FactEmployeeCompetencyWeightedScoreRatingService.create({
        employeeId: CreateFactEmployeeCompetencyNumericRatingDto.employeeId,
      });
    const avgRating =
      await this.FactEmployeeCompetencyAvgScoreRatingService.create({
        employeeId: CreateFactEmployeeCompetencyNumericRatingDto.employeeId,
      });

    const finalResponse = {
      ...numericRatings,
      ...weightedRating,
      ...avgRating,
    };

    return finalResponse;
  }
}

// async employeeOwnershipRating(competencyDto: CompetencyDto) {
//   try {

//     let max_numeric_rating = await this.compentencyRatingrepository
//       .createQueryBuilder()
//       .select("max_numeric_rating")
//       .where("competency_name = 'Ownership'")
//       .execute()
//     console.log(max_numeric_rating[0].max_numeric_rating);
//     let decimal_score = competencyDto.itemNumericRating / max_numeric_rating[0].max_numeric_rating
//     console.log(decimal_score);

//     let weight = await this.compentencyRatingrepository
//       .createQueryBuilder()
//       .select("weight")
//       .where("competency_name = 'Ownership'")
//       .execute()

//     console.log(weight[0].weight);

//     let weighted_score = decimal_score * weight[0].weight
//     console.log(weighted_score);

//     let body = {
//       empWeighted: weighted_score,
//       employeeId: competencyDto.employeeId,
//       empCompetencyName: "Ownership"
//     }
//     console.log(body);

// let saved_rating = await this.employeeCompetencyRatingRepository.save({ ...body })

// return saved_rating
//     } catch (error) {
//       return error.message
//     }
//   }
// }

// async empO

//   async employeeResourcefullnessRating(competencyDto: CompetencyDto) {
//     try {

//       let max_numeric_rating = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("max_numeric_rating")
//         .where("competency_name = 'Resourcefulness'")
//         .execute()
//       console.log(max_numeric_rating[0].max_numeric_rating);
//       let decimal_score = competencyDto.itemNumericRating / max_numeric_rating[0].max_numeric_rating
//       console.log(decimal_score);

//       let weight = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("weight")
//         .where("competency_name = 'Resourcefulness'")
//         .execute()

//       console.log(weight[0].weight);

//       let weighted_score = decimal_score * weight[0].weight
//       console.log(weighted_score);

//       let body = {
//         empWeighted: weighted_score,
//         employeeId: competencyDto.employeeId,
//         empCompetencyName: "Resourcefulness"
//       }

//       let saved_rating = await this.employeeCompetencyRatingRepository.save({ ...body })

//       return saved_rating
//     } catch (error) {
//       return error.message
//     }
//   }
//   async employeeResponsivenessRating(competencyDto: CompetencyDto) {
//     try {

//       let max_numeric_rating = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("max_numeric_rating")
//         .where("competency_name = 'Responsiveness'")
//         .execute()
//       console.log(max_numeric_rating[0].max_numeric_rating);
//       let decimal_score = competencyDto.itemNumericRating / max_numeric_rating[0].max_numeric_rating
//       console.log(decimal_score);

//       let weight = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("weight")
//         .where("competency_name = 'Responsiveness'")
//         .execute()

//       console.log(weight[0].weight);

//       let weighted_score = decimal_score * weight[0].weight
//       console.log(weighted_score);

//       let body = {
//         empWeighted: weighted_score,
//         employeeId: competencyDto.employeeId,
//         empCompetencyName: "Responsiveness"
//       }

//       let saved_rating = await this.employeeCompetencyRatingRepository.save({ ...body })

//       return saved_rating
//     } catch (error) {
//       return error.message
//     }
//   }

//   async employeePunctualityRating(competencyDto: CompetencyDto) {
//     try {

//       let max_numeric_rating = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("max_numeric_rating")
//         .where("competency_name = 'Punctuality'")
//         .execute()
//       console.log(max_numeric_rating[0].max_numeric_rating);
//       let decimal_score = competencyDto.itemNumericRating / max_numeric_rating[0].max_numeric_rating
//       console.log(decimal_score);

//       let weight = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("weight")
//         .where("competency_name = 'Punctuality'")
//         .execute()

//       console.log(weight[0].weight);

//       let weighted_score = decimal_score * weight[0].weight
//       console.log(weighted_score);

//       let body = {
//         empWeighted: weighted_score,
//         employeeId: competencyDto.employeeId,
//         empCompetencyName: "Punctuality"
//       }

//       let saved_rating = await this.employeeCompetencyRatingRepository.save({ ...body })

//       return saved_rating
//     } catch (error) {
//       return error.message
//     }
//   }

//   async employeeAttendanceRating(competencyDto: CompetencyDto) {
//     try {

//       let max_numeric_rating = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("max_numeric_rating")
//         .where("competency_name = 'Attendance'")
//         .execute()
//       console.log(max_numeric_rating[0].max_numeric_rating);
//       let decimal_score = competencyDto.itemNumericRating / max_numeric_rating[0].max_numeric_rating
//       console.log(decimal_score);

//       let weight = await this.compentencyRatingrepository
//         .createQueryBuilder()
//         .select("weight")
//         .where("competency_name = 'Attendance'")
//         .execute()

//       console.log(weight[0].weight);

//       let weighted_score = decimal_score * weight[0].weight
//       // console.log(weighted_score);

//       let body = {
//         empWeighted: weighted_score,
//         employeeId: competencyDto.employeeId,
//         empCompetencyName: "Attendance"
//       }

//       let saved_rating = await this.employeeCompetencyRatingRepository.save({ ...body })

//       return saved_rating
//     } catch (error) {
//       return error.message
//     }
//   }
//   async employeeSectionRating(competencyDto: CompetencyDto) {
//     let total_max_weight = '100'

//   }
// }

//   // findAll() {
//   //   return `This action returns all factEmployeeCompetencyRating`;
//   // }

//   // findOne(id: number) {
//   //   return `This action returns a #${id} factEmployeeCompetencyRating`;
//   // }

//   // update(id: number, updateFactEmployeeCompetencyRatingDto: UpdateFactEmployeeCompetencyRatingDto) {
//   //   return `This action updates a #${id} factEmployeeCompetencyRating`;
//   // }

//   // remove(id: number) {
//   //   return `This action removes a #${id} factEmployeeCompetencyRating`;
//   // }
