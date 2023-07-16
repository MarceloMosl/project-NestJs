import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { userLogged } from '../auth/decorator/user.decorator';
import { User } from '@prisma/client';
import { PostGuard } from './guard/post.guard';
import { postDto } from './dto/postDto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @UseGuards(PostGuard)
  @Get()
  async getUserPosts(@userLogged() user: User) {
    return await this.publicationsService.getPostsByUserId(user.id);
  }

  @UseGuards(PostGuard)
  @Post()
  async createPublication(@Body() body: postDto, @userLogged() user: User) {
    return await this.publicationsService.create(body, user);
  }
}
