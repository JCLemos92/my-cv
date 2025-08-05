import { CompanyCard } from "../components/CompanyCard"
import { CareerProps } from "../models/CarrerProps"

export const Career = () => {
	return (
		<div className="space-y-6 m-15">
			{CareerProps.map(company => (
				<CompanyCard key={company.id} {...company} />
			))}
		</div>
	)
}
