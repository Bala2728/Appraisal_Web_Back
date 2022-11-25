import { ApiProperty } from "@nestjs/swagger";

export class CreateFactEmployeeWithRoDto {
    @ApiProperty()
    userId:string;
    @ApiProperty()
    reviewingOfficerName:string;
    @ApiProperty()
    reviewingOfficerStartTime:Date;
    @ApiProperty()
    reviewingOfficerEndTime:Date;
    @ApiProperty()
    enableStatus:string;
    @ApiProperty()
    deleteStatus:string;
    @ApiProperty()
    createdBy:string;
    @ApiProperty()
    isActive:boolean;
}
