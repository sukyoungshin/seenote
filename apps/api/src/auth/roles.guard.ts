import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles =
      this.reflector.get<Role[]>('roles', context.getHandler()) ??
      this.reflector.get<Role[]>('roles', context.getClass());
    const user = context.switchToHttp().getRequest().user;

    return roles.includes(user.role);
  }
}
