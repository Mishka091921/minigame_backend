import { IsString, IsEmail, MinLength, IsNumber, IsOptional } from 'class-validator';

export class CreateChargingDTO {

    @IsNumber()
    amount: number;

    @IsNumber()
    @IsOptional()
    status?: number;
}




