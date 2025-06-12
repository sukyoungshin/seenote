import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';

export class UpdateUserDto {
  @Trim()
  @IsEmail()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Matches(/\S/, { message: '공백만 입력할 수 없습니다.' })
  email?: string;

  @Trim()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Matches(/\S/, { message: '공백만 입력할 수 없습니다.' })
  name?: string;

  @Trim()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @Matches(/\S/, { message: '공백만 입력할 수 없습니다.' })
  nickname?: string;

  @Trim()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(Role)
  @Matches(/\S/, { message: '공백만 입력할 수 없습니다.' })
  role?: string;

  @Trim()
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/\S/, { message: '공백만 입력할 수 없습니다.' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, {
    message: '비밀번호는 최소 하나의 문자와 숫자를 포함해야 합니다.',
  })
  password?: string;
}
