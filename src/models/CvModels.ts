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

export interface AcademicCardProps {
	institution: string
	logoUrl: string | null
	courseTitle: string
	certificationUrl: string | null
	year: string
}

export interface CertificationCardProps {
	institution: string
	logoUrl: string | null
	title: string
	certificationUrl: string | null
	date: string
}
