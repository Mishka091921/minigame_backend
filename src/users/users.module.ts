import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './users.controller';
import { UserSocketService } from './user_socket/user.socket.service';

@Module({
  imports: [PrismaModule], 
  providers: [UsersService, UserSocketService],
  exports: [UsersService],
  controllers: [UsersController],
  
})
export class UsersModule {}
