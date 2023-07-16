import { ConflictException, Injectable } from '@nestjs/common';
import { PublicationsRepo } from './publications.repository';
import { User } from '@prisma/client';
import { postDto } from './dto/postDto';

@Injectable()
export class PublicationsService {
  constructor(private readonly postsRepo: PublicationsRepo) {}
  async create(body: postDto, user: User) {
    const titleExists = await this.postsRepo.getByTitle(body.title);
    if (titleExists) throw new ConflictException();

    console.log({ body, user });
    return await this.postsRepo.create(body, user.id);
  }

  async getPostsByUserId(id: number) {
    const posts = await this.postsRepo.getByUserId(id);
    return posts;
  }
}
