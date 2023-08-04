import { Random } from 'mockjs';
import { PrismaClient } from '@prisma/client';
import create from './helper';
const primsa = new PrismaClient();
export default function user() {
  create(30, async (prisma: PrismaClient) => {
    await primsa.user.create({
      data: {
        email: Random.email(),
        password: Random.string(),
        github: Random.url(),
        avatar: Random.image('300*300'),
      },
    });
  });
}
