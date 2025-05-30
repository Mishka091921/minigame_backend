import { IsString, IsEmail, MinLength, IsNumber, IsOptional } from 'class-validator';

export class BettingDTO {
    @IsNumber()
    amount: number;

    @IsString()
    round_id: string;

    @IsString()
    game_name: string;

    @IsNumber()
    bet_type: number;
}




