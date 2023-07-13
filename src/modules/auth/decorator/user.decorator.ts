import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

export const userLogged = createParamDecorator(
  (_data: string, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    if (!req.user) throw new NotFoundException('User not found');
    return req.user;
  },
);