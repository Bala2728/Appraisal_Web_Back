import { ApiProperty } from "@nestjs/swagger";

export class PeriodWorkedDto{
    userId:string;
    @ApiProperty()
    appraisingOfficerName:string;
    @ApiProperty()
    appraisingOfficerStartTime:Date;
    @ApiProperty()
    appraisingOfficerEndTime:Date;
    @ApiProperty()
    reviewingOfficerName:string;
    @ApiProperty()
    reviewingOfficerStartTime:Date;
    @ApiProperty()
    reviewingOfficerEndTime:Date;
    status:boolean


}


