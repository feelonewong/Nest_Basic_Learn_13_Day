import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async register(registerAuthDto: RegisterAuthDto) {
    const response = await this.prisma.user.create({
      data: {
        username: registerAuthDto.username,
        password: registerAuthDto.password,
      },
    });
    delete response.password;
    const result = {
      message: '注册成功',
      code: 200,
      ...response,
    };
    return result;
  }

  async login(loginAuthDto: LoginAuthDto) {
    const response = await this.prisma.user.findFirst({
      where: {
        username: loginAuthDto.username,
        password: loginAuthDto.password,
      },
    });
    delete response.password;
    return {
      message: '登录成功',
      code: '200',
      ...response,
    };
  }
}
