import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserRepo } from '../user/user.repository';
import { UserService } from '../user/user.service';
import AuthGuard from './guard/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_CODE,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepo],
})
export class AuthModule {}
