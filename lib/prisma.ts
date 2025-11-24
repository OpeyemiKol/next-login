// lib/prisma.ts
import PrismaClientPkg from "@prisma/client";

const { PrismaClient } = PrismaClientPkg; // destructure the default export

// Use typeof PrismaClient to type the global correctly
const globalForPrisma = global as unknown as { prisma: typeof PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
