import { Random } from 'mockjs';
import { PrismaClient } from '@prisma/client';
import create from './helper';

const primsa = new PrismaClient();
export default async function category() {
  create(30, async (prisma: PrismaClient) => {
    await primsa.category.create({
      data: {
        tittle: Random.ctitle(),
      },
    });
  });
}
