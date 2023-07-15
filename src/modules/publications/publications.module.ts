import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { JwtModule } from '@nestjs/jwt';
import { PublicationsRepo } from './publications.repository';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { UserRepo } from '../user/user.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_CODE,
    }),
  ],
  controllers: [PublicationsController],
  providers: [
    PublicationsService,
    PublicationsRepo,
    UserRepo,
    UserService,
    AuthService,
  ],
})
export class PublicationsModule {}
