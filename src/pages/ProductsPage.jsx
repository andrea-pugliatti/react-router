import { useEffect, useState } from "react";

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
			.then(console.log)
			.then(setProducts)
			.catch((error) => console.error(error));
	};

	useEffect(fetchProducts, []);

	return <div className="container"></div>;
}
