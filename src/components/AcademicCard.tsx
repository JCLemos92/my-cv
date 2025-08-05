import type { AcademicCardProps } from "../models/CvModels"

export const AcademicCard = (data: AcademicCardProps) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
			{data.logoUrl && (
				<img
					src={data.logoUrl}
					alt={`${data.institution} logo`}
					className="w-40 h-20 mb-4 object-contain"
				/>
			)}
			<h2 className="text-xl font-semibold mb-2">{data.courseTitle}</h2>
			<p className="text-gray-400 mb-4">{data.year}</p>
			<p className="text-gray-600 mb-4">{data.institution}</p>
			{data.certificationUrl && (
				<a
					href={data.certificationUrl}
					download
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
				>
					Certificate
				</a>
			)}
		</div>
	)
}
