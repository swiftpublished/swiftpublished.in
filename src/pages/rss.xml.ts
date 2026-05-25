import rss from '@astrojs/rss'
import { siteConfig } from '@/site-config'
import { getArticles, articleHref } from '@/utils/articles'

export async function GET(context: any) {
	const articles = await getArticles()
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: articles.map((article) => {
			const p = article.data.properties
			return {
				title: p['Article Title'] || p.title,
				description: p['Article Description'] || '',
				pubDate: p['Created at'],
				link: articleHref(article)
			}
		})
	})
}
