import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';

import * as bcrypt from 'bcrypt';
import { UserRepo } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {}

  async create(body: CreateUserDTO) {
    const user = await this.userRepo.findUserByEmail(body.email);
    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const password = bcrypt.hashSync(body.password, 10);

    return this.userRepo.create({ ...body, password });
  }

  async get(id: number) {
    const user = await this.userRepo.findUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}
