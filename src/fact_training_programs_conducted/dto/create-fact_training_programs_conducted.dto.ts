import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFactTrainingProgramsConductedDto {
    @ApiProperty()
    @IsNotEmpty({message:"User ID should not be Empty"})
    userId:string;
    @ApiProperty()
    titleOfTheProgrammeConducted:string;
    @ApiProperty()
    month:string;
    @ApiProperty()
    levelsParticipantsCovered:string;
    @ApiProperty()
    enableStatus:string;
    @ApiProperty()
    deleteStatus:string;
    @ApiProperty()
    createdBy:string;
    @ApiProperty()
    isActive:boolean
}
