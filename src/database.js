import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

export const context = {
  prisma,
};
