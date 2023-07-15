import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PublicationsRepo {
  constructor(private readonly prisma: PrismaService) {}

  async getByUserId(id: number) {
    return await this.prisma.publications.findMany({ where: { userId: id } });
  }
}
