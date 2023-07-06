import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';

@Injectable()
export class UserService {
  create(body: CreateUserDTO) {
    return body;
  }
}
