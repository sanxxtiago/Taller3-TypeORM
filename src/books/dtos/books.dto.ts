import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";

export class BooksDto{

    @IsString()
    titulo!: string;

    @IsString()
    autor !: string;

    @Type(()=> Number)
    @IsNumber()
    @IsPositive()
    anio !: number;

    @Type(()=> Boolean)
    @IsBoolean()
    disponible !: boolean;

}