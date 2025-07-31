import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout.tsx"
import "./index.css"
import { Landing } from "./pages/Landing.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter basename="/my-cv">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Landing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
