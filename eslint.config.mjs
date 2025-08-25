import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore common generated + build files in a Next.js repo
  {
    ignores: [
      // Node + deps
      "node_modules/**",
      "./lib/generated/**",
      // Build outputs
      ".next/**",
      "out/**",
      "build/**",

      // Lint/TypeScript caches
      ".turbo/**",
      ".vercel/**",
      ".eslintcache",
      "coverage/**",

      // Prisma generated
      ".prisma/**",
      "prisma/generated/**",
      "@prisma/client/**",

      // Other misc
      "dist/**",
      "*.min.js",
    ],
  },
];

export default eslintConfig;
