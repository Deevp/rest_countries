import DetailedCard from "./DetailedCard";

const CountryCard = (props) => {
	return (
		<div
			className="main--card"
			onClick={(e) => {
				props.handleClick(<DetailedCard props={props} />);
			}}
		>
			<div className="card--flag">
				<img src={props.flag} alt={props.name} />
			</div>
			<div className="card--content">
				<h1 className="card--name">{props.name}</h1>
				{props.population && (
					<h2 className="card--detail">
						<span className="detail--title">Population: </span>
						<p className="detail--content">{props.population}</p>
					</h2>
				)}
				{props.region && (
					<h2 className="card--detail">
						<span className="detail--title">Region: </span>
						<p className="detail--content">{props.region}</p>
					</h2>
				)}
				{props.capital && (
					<h2 className="card--detail">
						<span className="detail--title">Capital: </span>
						<p className="detail--content">{props.capital}</p>
					</h2>
				)}
			</div>
		</div>
	);
};

export default CountryCard;
