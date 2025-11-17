import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "ldrs/react/Quantum.css";
import { Quantum } from "ldrs/react";

export default function ProductsPage() {
	const productsEndpoint = "https://fakestoreapi.com/products";

	// {
	// 	id: 1,
	// 	title: "",
	// 	price: 1,
	// 	description: "",
	// 	category: "",
	// 	image: "",
	// 	rating: {
	// 		rate: 1,
	// 		count: 1,
	// 	}
	// }

	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchProducts = () => {
		fetch(productsEndpoint)
			.then((response) => response.json())
			.then(setProducts)
			.catch((error) => console.error(error))
			.finally(() => setIsLoading(false));
	};

	useEffect(fetchProducts, []);

	return (
		<main>
			<div className="container">
				<div className="row">
					{isLoading ? (
						<div className="loader">
							<Quantum size="150" speed="0.6" color="black" />
						</div>
					) : (
						products.map((item) => (
							<div key={item.id} className="col">
								<Link to={`/products/${item.id}`}>
									<Card product={item} />
								</Link>
							</div>
						))
					)}
				</div>
			</div>
		</main>
	);
}
