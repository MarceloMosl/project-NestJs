import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthUserDto } from './dto/authDto';
import { UserService } from '../user/user.service';
import { UserRepo } from '../user/user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { AuthSignInDto } from './dto/authSignInDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly userRepo: UserRepo,
    private readonly jwtService: JwtService,
  ) {}

  async signup(body: AuthUserDto) {
    const user = await this.userService.create(body);
    return this.generateToken(user);
  }

  async signin({ email, password }: AuthSignInDto) {
    const user = await this.userRepo.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Email or password invalid');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Email or password invalid');
    }

    return this.generateToken(user);
  }

  generateToken(user: User) {
    const token = this.jwtService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '7 days',
        subject: String(user.id),
        issuer: 'master',
        audience: 'users',
      },
    );

    return { token };
  }
}
