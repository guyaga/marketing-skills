import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const skills = defineCollection({
  loader: glob({
    pattern: "**/SKILL.md",
    base: "../skills",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    metadata: z
      .object({
        version: z.string().optional(),
      })
      .passthrough()
      .optional(),
  }),
});

export const collections = { skills };
