import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
