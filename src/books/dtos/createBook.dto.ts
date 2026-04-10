import { IsBoolean, IsNumber, IsPositive, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateBookDto {

    @IsString()
    titulo!: string;

    @IsString()
    autor!: string;

    @Type(() => Number)
    @IsNumber()
    @IsPositive()
    anio!: number;

    @Type(() => Boolean)
    @IsBoolean()
    disponible!: boolean;
}