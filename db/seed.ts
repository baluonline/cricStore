// import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";
import { prisma } from "./prisma";

async function main() {
  // const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleData.products,
  });
  console.log("Database seeded with sample data.");
}
main();
