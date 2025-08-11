"use server";
// import { PrismaClient } from "@prisma/client";

import { convertPrismaObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

// import { prisma } from "@/lib/prisma";
//Get latest products
export const getLatestProducts = async () => {
  // const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_LIMIT,
  });
  return convertPrismaObject(data);
};

//Get single product by slug
export const getProductBySlug = async (slug: string) => {
  // const prisma = new PrismaClient();
  const data = await prisma.product.findUnique({
    where: { slug },
  });
  return convertPrismaObject(data);
};
