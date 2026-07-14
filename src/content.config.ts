import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.string(),
    tagline: z.string(),
    description: z.string(),
    capacity: z.string(),
    liftHeight: z.string(),
    battery: z.string(),
    chargeTime: z.string(),
    dimensions: z.string(),
    weight: z.string(),
    useCase: z.string(),
  }),
});

export const collections = { products };
