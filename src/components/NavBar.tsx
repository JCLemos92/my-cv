import { Link } from "react-router-dom"

export const NavBar = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
			{/* Navigation */}
			<nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md py-4">
				<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
					<h1 className="text-xl font-bold flex items-center">
						<img src="logo.png" alt="mylogo" className="h-8 mr-4" />
						João Lemos
					</h1>
					<ul className="flex space-x-4">
						<li>
							<Link to="/" className="hover:text-blue-500">
								About
							</Link>
						</li>
						<li>
							<Link to="career" className="hover:text-blue-500">
								Experience
							</Link>
						</li>
						<li>
							<Link to="education" className="hover:text-blue-500">
								Education
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
