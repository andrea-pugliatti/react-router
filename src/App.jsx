import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>HomePage</h1>} />
				<Route path="/about" element={<h1>AboutPage</h1>} />
				<Route path="/products" element={<h1>Products</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
