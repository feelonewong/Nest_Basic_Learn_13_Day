import { Random } from 'mockjs';
import { PrismaClient } from '@prisma/client';
import create from './helper';

const primsa = new PrismaClient();
export default async function article() {
  create(30, async (prisma: PrismaClient) => {
    await primsa.article.create({
      data: {
        title: Random.ctitle(),
        content: Random.paragraph(),
        thumb: Random.string(),
      },
    });
  });
}
