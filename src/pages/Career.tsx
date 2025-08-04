import { CompanyCard } from "../components/CompanyCard"
import type { CompanyCardProps } from "../models/CvModels"

export const Career = () => {
	const CareerProps: CompanyCardProps[] = [
		{
			id: 1,
			companyName: "Natixis",
			logoUrl: "natixis.jpeg",
			jobTitle: "Software Developer",
			description: [
				"As a Frontend Developer on the Workplace team at Natixis, I played a pivotal role in developing internal projects that enhanced operational efficiency. My primary focus was a critical onboarding and offboarding platform, built using Angular with a Spring Boot backend. I was in charge of frontend development, crafting intuitive and responsive user interfaces, while occasionally tackling backend tasks to ensure seamless integration.",
				"After one year, I took on leadership responsibilities as the project main developer, guiding a team of up to four developers. I collaborated closely with product owners to gather requirements, developed comprehensive documentation, designed functional architectures, and managed task allocation through Jira. Additionally, I oversaw support tickets, database management, and user permissions, ensuring the platform’s reliability and security. My ability to balance technical excellence with team coordination drove significant improvements in project delivery and stakeholder satisfaction.",
				"Beyond the main project, I maintained Purple Scan, a secondary web application hosted externally on cPanel. I managed all aspects of this project, from keeping the website updated to handling hosting-related tasks, ensuring its stability and accessibility. As Natixis began transitioning to a Scrum Master role, I briefly took on agile leadership responsibilities before departing, leaving a legacy of impactful solutions and effective team collaboration.",
			],
			technologies: [
				"Angular",
				"Typescript",
				"Spring Boot",
				"MySQL",
				"HTML/CSS",
				"JavaScript",
			],
			tools: [
				"Jira",
				"BitBucket",
				"Confluence",
				"VS Code",
				"WebStorm",
				"Intellij",
				"MySQL Workbench",
			],
			methodologies: ["Agile", "Scrum", "Kanban"],
			years: "2021-2024",
		},
	]

	return (
		<div className="space-y-6 m-15">
			{CareerProps.map(company => (
				<CompanyCard key={company.id} {...company} />
			))}
		</div>
	)
}
