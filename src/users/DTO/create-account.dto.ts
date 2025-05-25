import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  username: string;

  @IsString()
  roles: Role;
}

enum Role {
  USER = 'user',
  ADMIN = 'admin',
  TEST_PLAYER = 'test_player'
}