import { Injectable } from '@nestjs/common';
import { PublicationsRepo } from './publications.repository';

@Injectable()
export class PublicationsService {
  constructor(private readonly postsRepo: PublicationsRepo) {}

  async getPostsByUserId(id: number) {
    const posts = await this.postsRepo.getByUserId(id);
    return posts;
  }
}
