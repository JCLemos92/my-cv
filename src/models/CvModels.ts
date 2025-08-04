export interface HeroProps {
	name: string
	description: string
	linkedinUrl: string
	email: string
	githubUrl: string
}

export interface CompanyCardProps {
	id: number
	companyName: string
	logoUrl: string
	jobTitle: string
	description: string[]
	technologies: string[]
	tools: string[]
	methodologies: string[]
	years: string
}
