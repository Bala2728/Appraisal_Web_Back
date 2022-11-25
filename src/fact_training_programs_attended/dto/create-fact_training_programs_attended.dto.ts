import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFactTrainingProgramsAttendedDto {
    @ApiProperty()
    @IsNotEmpty({message:"User ID should not be Empty"})
    userId:string;
    @ApiProperty()
    @IsNotEmpty({message:"Title of the Programme Attended should not be Empty"})
    titleOfTheProgrammeAttended:string;
    @ApiProperty()
    duration:string;
    @ApiProperty()
    trainerDetails:string;
    @ApiProperty()
    enableStatus:string;
    @ApiProperty()
    deleteStatus:string;
    @ApiProperty()
    createdBy:string;
    @ApiProperty()
    isActive:boolean;

}
