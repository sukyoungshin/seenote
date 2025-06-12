import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';

export class CreateUserDto {
  @Trim()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  email: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  nickname: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @IsEnum(Role)
  role: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, {
    message: '비밀번호는 최소 하나의 문자와 숫자를 포함해야 합니다.',
  })
  password: string;
}
