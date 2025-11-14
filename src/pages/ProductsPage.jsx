import { useEffect, useState } from "react";
import Card from "../components/Card";

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

	const fetchProducts = () => {
		fetch(productsEndpoint)
			.then((response) => response.json())
			.then(setProducts)
			.catch((error) => console.error(error));
	};

	useEffect(fetchProducts, []);

	return (
		<div className="container">
			<div className="row">
				{products.map((item) => (
					<div key={item.id} className="col">
						<Card product={item} />
					</div>
				))}
			</div>
		</div>
	);
}
