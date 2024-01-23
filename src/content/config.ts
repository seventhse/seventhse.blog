import { defineCollection, z } from 'astro:content';
import { BlogSchema } from '../schemas';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: BlogSchema,
});


export const collections = { blog };
