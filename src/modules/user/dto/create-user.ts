import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'VC NÃO SABE O QUE É UM EMAIL?' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}
