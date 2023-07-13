import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const { authorization } = req.headers;
    try {
      const token = authorization?.split(' ')[1];
      const data = this.authService.checkToken(token);

      const user = await this.userService.get(Number(data.sub));

      req.user = user;
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
