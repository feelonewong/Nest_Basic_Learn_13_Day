import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function create(
  count: number,
  callback: (prisma: PrismaClient) => void,
) {
  for (let i = 0; i < count; i++) {
    callback(prisma);
  }
}
