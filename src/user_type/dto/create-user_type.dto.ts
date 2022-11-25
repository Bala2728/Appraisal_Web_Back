import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateUserTypeDto {
    @IsNotEmpty({message:"User Type should not be Empty"})
    @MaxLength(50)
    @ApiProperty()
    userType:string;
    @IsNotEmpty({message:"Enable Status should not be Empty"})
    @ApiProperty()
    enableStatus:string;
    @ApiProperty()
    @IsNotEmpty({message:"Delete Status should not be Empty"})
    deleteStatus:string;
    @IsNotEmpty({message:"Created By should not be Empty"})
    @ApiProperty()
    createdBy:string;
    @ApiProperty()
    @IsNotEmpty({message:"Active Status should not be Empty"})
    isActive:boolean
}
