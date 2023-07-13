import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepo } from './user.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_CODE,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepo],
  exports: [UserService, UserModule],
})
export class UserModule {}
