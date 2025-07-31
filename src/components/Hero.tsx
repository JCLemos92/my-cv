import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import type { HeroProps } from "../models/CvModels"

export const Hero = ({
	name,
	description,
	linkedinUrl,
	email,
	githubUrl,
}: HeroProps) => {
	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white"
		>
			<div className="text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
					Hi, I'm {name}
				</h1>
				<p className="text-xl md:text-2xl mb-6">{description}</p>
				<div className="space-x-4 mb-8">
					{/* <a
            href="/path-to-cv.pdf"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600"
          >
            Contact Me
          </a> */}
				</div>
				{/* New Contact Links Section */}
				<div className="flex justify-center space-x-6">
					{linkedinUrl && (
						<a
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-white hover:text-gray-200 transition-colors"
							aria-label="LinkedIn Profile"
						>
							<FaLinkedin size={24} className="mr-2" />
							LinkedIn
						</a>
					)}
					{email && (
						<a
							href={`mailto:${email}`}
							className="flex items-center text-white hover:text-gray-200 transition-colors"
							aria-label="Email"
						>
							<FaEnvelope size={24} className="mr-2" />
							Email
						</a>
					)}
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-white hover:text-gray-200 transition-colors"
							aria-label="GitHub Profile"
						>
							<FaGithub size={24} className="mr-2" />
							GitHub
						</a>
					)}
				</div>
			</div>
		</section>
	)
}
