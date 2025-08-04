import { Hero } from "../components/Hero"
import type { HeroProps } from "../models/CvModels"

export const Landing = () => {
	const heroText: HeroProps = {
		name: "João Lemos",
		description: "Software Engineer",
		linkedinUrl: "https://www.linkedin.com/in/jclemos/",
		email: "joaocarlosfonsecapinalemos@hotmail.com",
		githubUrl: "https://github.com/JCLemos92",
	}

	return (
		<div className="bg-gray-100 text-gray-900 transition-colors duration-300">
			<Hero
				name={heroText.name}
				description={heroText.description}
				linkedinUrl={heroText.linkedinUrl}
				email={heroText.email}
				githubUrl={heroText.githubUrl}
			/>
			<div id="about" className="p-10 leading-tight">
				<h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
					About Me
				</h2>
				<div className="max-w-2xl mx-auto space-y-4 text-lg leading-relaxed">
					<p>
						I’m a frontend engineer with four years of experience building
						sleek, data-driven web applications using Angular and TypeScript in
						the finance and transport sectors. As a visual thinker, I see coding
						as solving puzzles, crafting intuitive, pixel-perfect interfaces
						that make complex problems feel simple. Explore my portfolio to see
						small projects I’m tackling in my free time, starting with this very
						website, built with React and Tailwind to showcase my growing skills
						in a new stack.
					</p>
					<p>
						Recently, I’ve been diving into React, building this very website to
						flex my skills and embrace a framework that sparks my creativity. As
						a new dad, my hobbies—racking up platinum trophies in games, diving
						into Brandon Sanderson’s epic novels, or battling it out in the TCG
						Flesh and Blood—take a backseat to diaper changes, but my nerdy side
						still fuels my passion for problem-solving. I’m eager to grow as a
						frontend developer and bring my love for puzzles and visuals to
						innovative teams that value a bit of geeky enthusiasm.
					</p>
				</div>
			</div>
		</div>
	)
}
