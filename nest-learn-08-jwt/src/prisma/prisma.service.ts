import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // record log
    super({ log: ['query'] });
  }
  async onModuleInit() {
    // connect
    await this.$connect();
  }
}
