import { neonConfig, Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

import ws from "ws";

// ✅ Ensure DATABASE_URL is available
if (!process.env.DATABASE_URL) {
  throw new Error(
    "❌ DATABASE_URL is not defined in the environment variables."
  );
}

// ✅ Set up WebSocket support for Neon
neonConfig.webSocketConstructor = ws;
const connectionString = process.env.DATABASE_URL;
// ✅ Initialize Neon Pool with connection string
const adapter = new PrismaNeon({ connectionString });

// ✅ Extend PrismaClient with price and rating transformations
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price?.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating?.toString();
        },
      },
    },
  },
});
