export default function Card({ product }) {
	return (
		<div className="card">
			<img src={product.image} alt={product.title} />
			<div className="card-body">
				<h3>{product.title}</h3>
				<span>{product.rating.rate}/5 </span>
				<span>Price: {product.price}€</span>
				<div>{product.description}</div>
			</div>
		</div>
	);
}
