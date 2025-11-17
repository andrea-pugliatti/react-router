import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return (
		<div className="container">
			<h2>404 Not Found</h2>
			<Link to="/">Torna alla homepage</Link>
		</div>
	);
}
