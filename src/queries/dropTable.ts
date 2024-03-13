import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function dropTable(tableName: string) {
  const result = await prisma.$queryRaw`DROP Table ${tableName}`
  return result;
}