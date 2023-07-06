import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, PostModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
