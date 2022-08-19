const DetailedCard = ({ props }) => {
	return (
		<div>
			<div
				onClick={() => {
					props.handleClick("");
				}}
			>
				← Back
			</div>
			<div className="main--detailed">
				<div className="detailed--flag">
					<img src={props.flag} alt={props.name} />
				</div>
				<div className="detailed--content">
					<h1 className="detailed--name">{props.name}</h1>
					<div className="detailed--details">
						{props.native && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Native Name:{" "}
								</span>
								<p className="detail--content">
									{props.native}
								</p>
							</h2>
						)}
						{props.population && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Population:{" "}
								</span>
								<p className="detail--content">
									{props.population}
								</p>
							</h2>
						)}
						{props.region && (
							<h2 className="detailed--detail">
								<span className="detail--title">Region: </span>
								<p className="detail--content">
									{props.region}
								</p>
							</h2>
						)}
						{props.subregion && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Sub Region:{" "}
								</span>
								<p className="detail--content">
									{props.subregion}
								</p>
							</h2>
						)}
						{props.capital && (
							<h2 className="detailed--detail">
								<span className="detail--title">Capital: </span>
								<p className="detail--content">
									{props.capital}
								</p>
							</h2>
						)}
						{props.domain && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Top Level Domain:{" "}
								</span>
								<p className="detail--content">
									{props.domain}
								</p>
							</h2>
						)}
						{props.currencies.length > 0 && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Currencies:{" "}
								</span>
								<p className="detail--content">
									{props.currencies &&
										props.currencies.join(", ")}
								</p>
							</h2>
						)}
						{props.languages.length > 0 && (
							<h2 className="detailed--detail">
								<span className="detail--title">
									Languages:{" "}
								</span>
								<p className="detail--content">
									{props.languages &&
										props.languages.join(", ")}
								</p>
							</h2>
						)}
					</div>
					{props.borders && (
						<div className="detailed--borders">
							<span className="detail--title">Borders: </span>
							{props.borders.join(", ")}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DetailedCard;
