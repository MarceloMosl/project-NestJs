import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  async signUp(@Body() body: AuthUserDto) {
    return this.authService.signin(body);
  }

  @Post('signup')
  async signup(@Body() body: AuthUserDto) {
    return this.authService.signup(body);
  }
}
