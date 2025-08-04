import type { CompanyCardProps } from "../models/CvModels"

export const CompanyCard = (companyInfo: CompanyCardProps) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
			<div className="flex flex-col md:flex-row items-start md:items-center mb-4">
				<img
					src={companyInfo.logoUrl}
					alt={`${companyInfo.companyName} logo`}
					className="w-40 h-30 object-contain mb-4 md:mb-0 md:mr-4"
				/>
				<div>
					<h3 className="text-xl font-semibold text-gray-800">
						{companyInfo.jobTitle}
					</h3>
					<p className="text-lg text-gray-600">{companyInfo.companyName}</p>
					<p className="text-sm text-gray-500">{companyInfo.years}</p>
				</div>
			</div>
			<div className="mb-4">
				{companyInfo.description.map((paragraph, index) => (
					<p key={`desc-${index}`} className="text-gray-600 mb-2 last:mb-0">
						{paragraph}
					</p>
				))}
			</div>
			<div className="mb-4">
				<h4 className="text-sm font-medium text-gray-700">Technologies:</h4>
				<div className="flex flex-wrap gap-2 mt-1">
					{companyInfo.technologies.map((tech, index) => (
						<span
							key={`${tech}-${index}`}
							className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
			<div className="mb-4">
				<h4 className="text-sm font-medium text-gray-700">Tools:</h4>
				<div className="flex flex-wrap gap-2 mt-1">
					{companyInfo.tools.map((tool, index) => (
						<span
							key={`${tool}-${index}`}
							className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded"
						>
							{tool}
						</span>
					))}
				</div>
			</div>
			<div>
				<h4 className="text-sm font-medium text-gray-700">Methodologies:</h4>
				<div className="flex flex-wrap gap-2 mt-1">
					{companyInfo.methodologies.map((method, index) => (
						<span
							key={`${method}-${index}`}
							className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded"
						>
							{method}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}
