import { Controller, Get, Inject } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor(@Inject('reg') private reigster: string) {}
  @Get()
  login() {
    return this.reigster;
  }
}
