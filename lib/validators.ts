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
  category: z
    .string()
    .min(3, "Category must at least 3 characters long")
    .nullable(),
  brand: z.string().min(3, "Brand must at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must at least 3 characters long")
    .nullable(),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable(),
  price: currency,
});

// Schema for signing users
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must at least 6 characters long"),
});
