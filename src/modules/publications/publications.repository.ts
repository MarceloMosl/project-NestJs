import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { postDto } from './dto/postDto';

@Injectable()
export class PublicationsRepo {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: postDto, userId: number) {
    const publication = await this.prisma.publications.create({
      data: {
        image: body.image,
        title: body.title,
        text: body.text,
        dateToPublish: body.dateToPublish,
        socialMedia: body.socialMedia,
        userId,
      },
    });

    return publication;
  }

  async getByUserId(id: number) {
    return await this.prisma.publications.findMany({ where: { userId: id } });
  }

  async getByTitle(title: string) {
    return await this.prisma.publications.findFirst({ where: { title } });
  }
}
