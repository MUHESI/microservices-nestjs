import { Type } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, {
    message: 'MinLength>> 5',
  })
  fName: string;

  @IsString()
  @IsNotEmpty()
  lName: string;

  @IsEmail()
  email: string;

  @IsIn(['ADMIN', 'USER'])
  @IsOptional()
  status;
}

export class GetPaginationDTO {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;
}
