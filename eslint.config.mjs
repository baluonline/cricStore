import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Convert old ESLint configs into Flat Config format
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Next.js recommended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Custom rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // fixed rule namespace
    },
  },

  // ✅ Ignore common generated + build files in a Next.js repo
  {
    ignores: [
      "node_modules/**",
      "./lib/generated/**",
      ".next/**",
      "out/**",
      "build/**",
      ".turbo/**",
      ".vercel/**",
      ".eslintcache",
      "coverage/**",
      ".prisma/**",
      "prisma/generated/**",
      "@prisma/client/**",
      "dist/**",
      "*.min.js",
    ],
  },
];

export default eslintConfig;
