import type { CertificationCardProps } from "../models/CvModels"

export const CertificationCard = (data: CertificationCardProps) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
			{data.logoUrl && (
				<img
					src={data.logoUrl}
					alt={`${data.institution} logo`}
					className="w-40 h-20 mb-4 object-contain"
				/>
			)}
			<h2 className="text-xl font-semibold mb-2">{data.title}</h2>
			<p className="text-gray-600 mb-4">{data.institution}</p>
			<p>{data.date}</p>
			{data.certificationUrl && (
				<a
					href={data.certificationUrl}
					target="_blank"
					download
					className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 m-4"
				>
					Certificate
				</a>
			)}
		</div>
	)
}
