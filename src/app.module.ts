import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicationsModule } from './modules/publications/publications.module';

@Module({
  imports: [UserModule, PrismaModule, AuthModule, PublicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
