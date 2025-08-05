import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.tsx"
import "./index.css"
import { Landing } from "./pages/Landing.tsx"
import { Career } from "./pages/Career.tsx"
import { Education } from "./pages/Education.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Landing />} />
					<Route path="career" element={<Career />} />
					<Route path="/education" element={<Education />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>
)
