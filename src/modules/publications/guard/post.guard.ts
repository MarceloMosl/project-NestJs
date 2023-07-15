import { Injectable } from '@nestjs/common';
import AuthGuard from 'src/modules/auth/guard/auth.guard';

@Injectable()
export class PostGuard extends AuthGuard {}
