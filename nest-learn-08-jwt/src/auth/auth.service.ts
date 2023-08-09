import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'argon2';
import { user } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const user = await this.prisma.user.create({
      data: {
        name: createAuthDto.name,
        password: await hash(createAuthDto.password),
        confirm_password: await hash(createAuthDto.confirm_password),
      },
    });
    return this.token(user);
  }
  async token({ name, id }: user) {
    return {
      token: await this.jwt.signAsync({
        name,
        sub: id,
      }),
    };
  }
}
