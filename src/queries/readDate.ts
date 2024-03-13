import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function readData({ limit, page }: { limit: number, page: number }) {
  const result = await prisma.user.findMany({
    skip: limit * page,
    take: limit,
    where: {
      posts: {
        some: {
          title: {
            equals: 'Post 1'
          }
        }
      }
    }
  })

  return result;
}