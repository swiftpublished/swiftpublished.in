interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://swiftpublished.in/',
	author: 'Swift Published',
	title: 'Swift Published',
	description:
		'A free weekly blog on Swift and iOS Development. Learn Swift, SwiftUI and iOS development from scratch with practical tutorials, deep-dives, and real-world architecture insights.',
	lang: 'en',
	ogLocale: 'en_US',
	shareMessage: 'Share this article',
	paginationSize: 12
}
