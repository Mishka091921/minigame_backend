import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateAccountDto } from './DTO/create-account.dto';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
  ) {}


 @Post()
 async createAccount(@Body() createAccountDto: CreateAccountDto){

    const res = await this.userService.createAccount(createAccountDto);

    return res; // Return the result or some response
 }
  
}
