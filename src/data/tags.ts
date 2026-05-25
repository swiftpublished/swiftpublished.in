export interface TagInfo {
	id: string
	name: string
}

// Display names for the Notion `Tags` multi_select values.
// IDs match the raw Notion option names exactly so filtering works directly.
export const TAGS: TagInfo[] = [
	{ id: 'swift', name: 'Swift' },
	{ id: 'swiftui', name: 'SwiftUI' },
	{ id: 'uikit', name: 'UIKit' },
	{ id: 'concurrency', name: 'Concurrency' },
	{ id: 'testing', name: 'Testing' },
	{ id: 'security', name: 'Security' },
	{ id: 'cicd', name: 'CI/CD' },
	{ id: 'architecture', name: 'Architecture' },
	{ id: 'conferences', name: 'Conferences' },
	{ id: 'AI', name: 'AI' }
]

export const findTag = (id: string) => TAGS.find((t) => t.id === id)
export const tagName = (id: string) => findTag(id)?.name ?? id
