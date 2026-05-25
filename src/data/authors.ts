export interface AuthorLinks {
	linkedin?: string
	twitter?: string
	github?: string
	adplist?: string
}

export interface Author {
	id: string
	name: string
	roles: ('author' | 'creator')[]
	location: string
	photo: string
	photoAlt: string
	bio: string[]
	quote: { text: string; attribution: string }
	links: AuthorLinks
}

export const AUTHORS: Author[] = [
	{
		id: 'murali',
		name: 'Muralidharan Kathiresan',
		roles: ['author'],
		location: 'London, UK',
		photo: '/images/authors/murali.jpg',
		photoAlt: 'Author Murali posing in a conference',
		bio: [
			'Murali is the founder and author of swiftpublished.in; originally from Tiruchirappalli, India; currently residing in London, UK.',
			'He has over a decade of experience in iOS Development, dating back to iOS 5. He loves everything about Apple and is a nerd when it comes to best coding practices and app architecture. He is passionate about learning new technology, meeting community members, and sharing ideas at Swift or iOS conferences and meet-ups.',
			'When he is not coding, he likes to explore new places, people, and cultures. Getting lost in the alleys of Italy was a recent adventure.'
		],
		quote: {
			text: 'The only reason we have come this far, is our community.',
			attribution: 'Murali Kathir'
		},
		links: {
			twitter: 'https://twitter.com/Muralidharan_K',
			linkedin: 'https://www.linkedin.com/in/muralidharankathiresan/',
			adplist: 'https://adplist.org/mentors/mobile-dev?session=52055-11-mentoring'
		}
	},
	{
		id: 'aaina',
		name: 'Aaina Jain',
		roles: ['author'],
		location: 'Bangalore, India',
		photo: '/images/authors/aaina.jpg',
		photoAlt: 'Author Aaina portrait photo',
		bio: [
			'Aaina is an author at swiftpublished.in; originally from Udaipur, India; currently residing in Bangalore, India.',
			'She has nearly a decade and a quarter years of experience as an iOS Developer, team lead, tech lead and now enjoying her managerial role at Gojek.',
			'She is one of the first and few women I have seen who is passionate about coding and the fun of it; she is a part of organising and speaking in multiple Swift meet-ups and conferences, a known face in the Bangalore iOS Dev community and a great Medium writer.',
			'Her best spot of the day is when she is with her cute little daughter; she is a proud mother enjoying every bit of it. She doesn’t mind getting her feet wet in a beach vacay once in a while with the family.'
		],
		quote: {
			text: "Keep going, because that's the only way.",
			attribution: 'Aaina'
		},
		links: {
			twitter: 'https://twitter.com/__aainajain',
			linkedin: 'https://www.linkedin.com/in/aaina-jain/'
		}
	},
	{
		id: 'shahrukh',
		name: 'Shahrukh Alam',
		roles: ['creator', 'author'],
		location: 'Odisha, India',
		photo: '/images/authors/shahrukh.jpeg',
		photoAlt: 'Author Shahrukh in front of a monument',
		bio: [
			'Meet Shahrukh, creator and author of swiftpublished.in. Originally from Odisha, India and currently residing there, he has over a decade of experience in iOS Development, dating back to iOS 6.',
			'As a self-proclaimed Apple fanboy, he loves everything about Apple — both tech and development. He specializes in best coding practices, app architecture, and optimization.',
			"He has helped numerous people become experts in iOS App Development and transitioned some to start their careers in iOS. When he's not coding, he enjoys exploring new places, meeting people from different cultures, and capturing memories with his Canon and DJI mini.",
			'The idea of SwiftPublished was pitched by him to his friends, and together they created a platform to help fellow iOS developers gain knowledge and expertise.'
		],
		quote: {
			text: 'There are no bad students, only bad teachers.',
			attribution: 'Shahrukh'
		},
		links: {
			linkedin: 'https://www.linkedin.com/in/alamshahrukh/',
			github: 'https://github.com/shahrukhalam'
		}
	},
	{
		id: 'saba',
		name: 'Kanagasabapathy Rajkumar',
		roles: ['author'],
		location: 'Bangalore, India',
		photo: '/images/authors/saba.jpeg',
		photoAlt: 'Author Sabapathy in front of a monument',
		bio: [
			'Meet Kanagasabapathy, author of swiftpublished.in. Originally from Tamil Nadu, India and currently residing in Bangalore, India.',
			"He's passionate about Apple's ecosystem and loves tech and development. He's highly focused on mastering the art of crafting elegant code and building apps.",
			'He actively participates in the SwiftBLR community, contributing to meet-up organisation and podcast discussions to share insights on Swift programming. His passion for knowledge-sharing extends to writing on Medium, where he shares his experiences in iOS development.'
		],
		quote: {
			text: 'Bringing ideas to life, one line of code at a time.',
			attribution: 'Sabapathy'
		},
		links: {
			linkedin: 'https://www.linkedin.com/in/sabapathy7/',
			github: 'https://github.com/sabapathy7'
		}
	}
]

export const findAuthor = (id: string) => AUTHORS.find((a) => a.id === id)
