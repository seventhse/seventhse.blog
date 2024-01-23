import { z } from "astro:content";

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.coerce.string(),
  updatedDate: z.coerce.date().optional(),
})