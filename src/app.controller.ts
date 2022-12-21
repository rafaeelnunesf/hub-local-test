import { AuthService } from './auth/auth.service';
import { Controller, Get } from '@nestjs/common';
import { User } from './api/user/user.entity';

import { Public } from './auth/decorators/public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Get('me')
  getMe(@CurrentUser() user: User): User {
    return user;
  }
}
