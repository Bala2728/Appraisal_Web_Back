import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFactEmployeeWithAoDto {
    @ApiProperty()
    @IsNotEmpty({message:"User ID should not be Empty"})
    userId:string;
    @ApiProperty()
    appraisingOfficerName:string;
    @ApiProperty()
    appraisingOfficerStartTime:Date;
    @ApiProperty()
    appraisingOfficerEndTime:Date;
    @ApiProperty()
    enableStatus:string;
    @ApiProperty()
    deleteStatus:string;
    @ApiProperty()
    createdBy:string;
    @ApiProperty()
    isActive:boolean;
}
