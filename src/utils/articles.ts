import { getCollection, type CollectionEntry } from 'astro:content'
import getReadingTime from 'reading-time'

export type Article = CollectionEntry<'articles'>

export const slugify = (s: string) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')

export const articleSlug = (article: Article) => slugify(article.data.properties.title)
export const articleHref = (article: Article) => `/article/${articleSlug(article)}`

// Notion loader already filters by Status=Done and sorts by Created at desc.
// Helpers below are just typed slices over that collection.
export async function getArticles(max?: number): Promise<Article[]> {
	const all = await getCollection('articles')
	return max ? all.slice(0, max) : all
}

export async function getArticlesByTag(tag: string): Promise<Article[]> {
	const all = await getArticles()
	return all.filter((a) => a.data.properties.Tags.includes(tag))
}

export async function getArticleTags(): Promise<string[]> {
	const all = await getArticles()
	const tags = new Set<string>()
	for (const a of all) for (const t of a.data.properties.Tags) tags.add(t)
	return Array.from(tags).sort()
}

export function readingTimeFor(article: Article): string {
	// notion-astro-loader stores rendered HTML on `rendered.html`; `body` is empty for non-markdown loaders.
	const html = (article as any).rendered?.html ?? article.body ?? ''
	const text = String(html)
		.replace(/<[^>]*>/g, ' ')
		.trim()
	if (!text) return '5 min read'
	return getReadingTime(text).text
}
