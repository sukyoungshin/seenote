import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

async function main() {
  const jsonData = await fs.readFile('./prisma/seed/user.json', 'utf-8');
  const items = JSON.parse(jsonData);

  for (const item of items) {
    await prisma.user.create({
      data: item,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
