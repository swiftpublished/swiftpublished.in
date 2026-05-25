export interface Sponsor {
	id: string
	name: string
	logo: string
	logoAlt: string
	website: string
	cta: string
	description: string
	active: boolean
}

export const SPONSORS: Sponsor[] = [
	{
		id: 'arctic-conference-2026',
		name: 'ARCtic Conference 2026',
		logo: 'https://arcticonference.com/static/logo.svg',
		logoAlt: 'ARCtic Conference logo',
		website: 'https://arcticonference.com/',
		cta: 'Get Tickets',
		description:
			'ARCtic Conference is the northernmost Apple-platforms conference, taking place in Oulu, Finland from Feb 10–12, 2026. Two days of talks, workshops and Arctic vibes for iOS, macOS and visionOS developers.',
		active: true
	}
]

export const activeSponsors = () => SPONSORS.filter((s) => s.active)
