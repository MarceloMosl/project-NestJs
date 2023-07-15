import { Controller, Get, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { userLogged } from '../auth/decorator/user.decorator';
import { User } from '@prisma/client';
import { PostGuard } from './guard/post.guard';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(PostGuard)
  @Get()
  async getUserPosts(@userLogged() user: User) {
    return await this.publicationsService.getPostsByUserId(user.id);
  }
}
