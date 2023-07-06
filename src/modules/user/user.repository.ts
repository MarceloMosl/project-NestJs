import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user';

@Injectable()
export class UserRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email } });
  }
}
