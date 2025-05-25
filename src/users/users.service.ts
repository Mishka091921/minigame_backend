// src/users/users.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAccountDto } from './DTO/create-account.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string, pass: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createAccount(createAccountDto: CreateAccountDto) {
    const existing = await this.prisma.user.findUnique({
      where: { username: createAccountDto.username },
    });

    if (existing) {
      throw new ConflictException('Username already exists');
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(createAccountDto.password, 10);

    // Create the user in the database
    return this.prisma.user.create({
      data: {
        username: createAccountDto.username,
        password: hashedPassword,
        roles: createAccountDto.roles,
      },
    });
  }
}
