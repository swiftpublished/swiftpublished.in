import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { notionLoader, notionPageSchema } from 'notion-astro-loader'
import { transformedPropertySchema as t } from 'notion-astro-loader/schemas'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false)
		})
})

const articles = defineCollection({
	loader: notionLoader({
		auth: import.meta.env.NOTION_TOKEN,
		database_id: import.meta.env.NOTION_DATABASE_ID,
		filter: {
			property: 'Status',
			status: { equals: 'Done' }
		},
		sorts: [{ property: 'Created at', direction: 'descending' }]
	}),
	schema: notionPageSchema({
		properties: z.object({
			title: t.title,
			'Article Title': t.rich_text,
			'Article Description': t.rich_text,
			Tags: t.multi_select,
			Status: t.status,
			'Cover Alternate text': t.rich_text.optional(),
			'Meta Title': t.rich_text.optional(),
			'Meta Description': t.rich_text.optional(),
			'Created at': t.created_time
		})
	})
})

export const collections = { blog, articles }
