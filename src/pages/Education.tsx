import { useState } from "react"
import { AcademicCard } from "../components/AcademicCard"
import { CertificationCard } from "../components/CertificationCard"
import { academicData, certificationData } from "../models/EducationData"

export const Education = () => {
	const [view, setView] = useState<"academic" | "certifications">("academic")

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Education & Certifications
			</h1>
			<div className="flex justify-center mb-6">
				<button
					type="button"
					className={`px-4 py-2 mr-2 rounded ${view === "academic" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
					onClick={() => setView("academic")}
				>
					Academic Background
				</button>
				<button
					type="button"
					className={`px-4 py-2 rounded ${view === "certifications" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
					onClick={() => setView("certifications")}
				>
					Certifications
				</button>
			</div>
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{view === "academic"
					? academicData.map(entry => (
							<AcademicCard key={entry.id} {...entry} />
						))
					: certificationData.map(entry => (
							<CertificationCard key={entry.id} {...entry} />
						))}
			</div>
		</div>
	)
}
