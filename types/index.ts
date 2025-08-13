import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  numReviews: number;
  isAvailable: boolean;
  isFeatured: boolean;
  createdAt: Date;
  rating: string;
};
