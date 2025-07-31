export const NavBar = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
			{/* Navigation */}
			<nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md py-4">
				<div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
					<h1 className="text-xl font-bold">João Lemos</h1>
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="hover:text-blue-500">
								About
							</a>
						</li>
						{/* <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
                <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
                <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contact</a></li> */}
					</ul>
				</div>
			</nav>
		</div>
	)
}
