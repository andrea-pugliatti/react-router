import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const navigate = useNavigate();

	const endpoint = `https://fakestoreapi.com/products/${id}`;

	const fetchProduct = () => {
		fetch(endpoint)
			.then((response) => response.json())
			.then(setProduct)
			.catch((error) => {
				console.error(error);
				navigate("/products");
			});
	};

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div className="container">
			<img src={product.image} alt={product.title} />
			<div>{product.title}</div>
			<div>{product.category}</div>
			<div>{product.description}</div>
			<div>{product.price}</div>
			{/* <div>{product.rating.count}</div>
			<div>{product.rating.rate}</div> */}
		</div>
	);
}
