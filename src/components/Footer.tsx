export const Footer = () => {
	return (
		<footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
			<div className="bg-white dark:bg-gray-800 shadow-md py-6">
				<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
					{/* Left Section: Name and Copyright */}
					<div className="mb-4 md:mb-0 text-center md:text-left">
						<h2 className="text-lg font-bold">João Lemos</h2>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							&copy; {new Date().getFullYear()} João Lemos. All rights reserved.
						</p>
					</div>

					{/* Right Section: Contact Info */}
					<div className="flex flex-col items-center md:items-end text-center md:text-right">
						<p className="text-sm text-gray-600 dark:text-gray-400">
							<a
								href="mailto:your.email@example.com"
								className="hover:text-blue-500 dark:hover:text-blue-400"
							>
								joaocarlosfonsecapinalemos@hotmail.com
							</a>
						</p>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							<a
								href="https://linkedin.com/in/jclemos"
								className="hover:text-blue-500 dark:hover:text-blue-400"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							{" | "}
							<a
								href="https://github.com/jclemos92"
								className="hover:text-blue-500 dark:hover:text-blue-400"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
