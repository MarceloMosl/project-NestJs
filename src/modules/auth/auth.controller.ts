import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authDto';
import AuthGuard from './guard/auth.guard';
import { userLogged } from './decorator/user.decorator';
import { User } from '@prisma/client';
import { AuthSignInDto } from './dto/authSignInDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  async signUp(@Body() body: AuthSignInDto) {
    return this.authService.signin(body);
  }

  @Post('signup')
  async signup(@Body() body: AuthUserDto) {
    return this.authService.signup(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUser(@userLogged() user: User) {
    return user;
  }
}
