import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

const Layout = () => {
	return (
		<>
			<NavBar />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
