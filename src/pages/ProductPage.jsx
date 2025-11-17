import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Quantum } from "ldrs/react";
import "ldrs/react/Quantum.css";

export default function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const endpoint = `https://fakestoreapi.com/products/${id}`;

	const fetchProduct = () => {
		fetch(endpoint)
			.then((response) => response.json())
			.then(setProduct)
			.catch((error) => {
				console.error(error);
				navigate("/products");
			})
			.finally(() => setIsLoading(false));
	};

	// useEffect(() => {
	// 	fetchProduct();
	// }, []);

	useEffect(() => {
		fetchProduct();
	}, [id]);

	return (
		<div className="container">
			{isLoading ? (
				<Quantum size="150" speed="1.00" color="black" />
			) : (
				<div>
					<img src={product.image} alt={product.title} />
					<div>
						<button
							type="button"
							onClick={() => navigate(`/products/${Number(id) - 1}`)}
						>
							{"<-"}
						</button>
						<button
							type="button"
							onClick={() => navigate(`/products/${Number(id) + 1}`)}
						>
							{"->"}
						</button>
					</div>
					<div>{product.title}</div>
					<div>{product.category}</div>
					<div>{product.description}</div>
					<div>{product.price}</div>
					{/* <div>{product.rating.count}</div>
			    <div>{product.rating.rate}</div> */}
				</div>
			)}
		</div>
	);
}
