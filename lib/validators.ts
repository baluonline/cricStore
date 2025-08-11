import { z } from "zod";
import { formatNumberWithDecimalPlaces } from "./utils";

const currency = z
  .string()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimalPlaces(Number(val))),
    "Price must be a valid number with up to two decimal places"
  );
// Scema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must at least 3 characters long"),
  slug: z.string().min(3, "Slug must at least 3 characters long"),
  category: z.string().min(3, "Category must at least 3 characters long"),
  brand: z.string().min(3, "Brand must at least 3 characters long"),
  description: z.string().min(3, "Description must at least 3 characters long"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.string().optional(),
  banner: z.string().nullable(),
  price: currency,
});
