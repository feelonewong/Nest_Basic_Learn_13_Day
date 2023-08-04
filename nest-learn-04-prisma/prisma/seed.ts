import { PrismaClient } from '@prisma/client';

const primsa = new PrismaClient();
async function run() {
  await primsa.user.create({
    data: {
      email: '3078623@qq.com',
      password: '123',
      github: 'feelonewong@githu.com',
    },
  });
}

run();
