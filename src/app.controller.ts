import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { User } from './api/user/user.entity';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Public()
  @Post('auth/login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    const user = req.body;
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.headers);
    return req.user;
  }

  /*   @Get('me')
  getMe(@CurrentUser() user: User): User {
    console.log(user);
    return user;
  } */
}
