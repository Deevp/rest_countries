import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { nanoid } from "nanoid";
const Main = (props) => {
	const [filter, setFilter] = useState({
		regex: "",
		by: "",
		val: "",
	});
	const [data, setData] = useState([]);
	const [cards, setCards] = useState([]);
	const [content, setContent] = useState();
	const [filterList, setFilterList] = useState();

	const handleClick = (component) => {
		setContent(component);
		setFilter({
			regex: "",
			by: "",
			val: "",
		});
	};

	const handleChange = (e) => {
		setFilter((prevState) => {
			return {
				...prevState,
				regex:
					e.target.value.length > 0
						? new RegExp("^" + e.target.value, "i")
						: "",
			};
		});
	};

	const handleSelect = (e) => {
		setFilter((prevState) => {
			return {
				...prevState,
				val: "",
				by: e.target.value,
			};
		});
	};

	const handleFilter = (e) => {
		setFilter((prevState) => {
			return {
				...prevState,
				val: e.target.value,
			};
		});
	};

	useEffect(() => {
		fetch("https://restcountries.com/v2/all")
			.then((res) => res.json())
			.then((res) => {
				let tempArr = {
					languages: new Set(),
					currencies: new Set(),
					region: new Set(),
				};
				setData(
					res.map((elem) => {
						elem.languages =
							elem.languages &&
							elem.languages.map((el) => el.name);
						elem.currencies =
							elem.currencies &&
							elem.currencies.map((el) => el.name);
						elem.languages &&
							elem.languages.forEach((el) => {
								tempArr.languages.add(el);
							});
						elem.currencies &&
							elem.currencies.forEach((el) => {
								tempArr.currencies.add(el);
							});
						elem.region && tempArr.region.add(elem.region);
						return elem;
					})
				);
				setFilterList({
					currencies: [...tempArr["currencies"]].sort(),
					languages: [...tempArr["languages"]].sort(),
					region: [...tempArr["region"]].sort(),
				});
			});
	}, []);

	useEffect(() => {
		setCards(() =>
			data.map((elem) => {
				if (
					!filter.by
						? filter.regex
							? filter.regex.test(elem.name)
							: true
						: filter.regex
						? filter.regex.test(elem.name.toLowerCase()) &&
						  elem[filter.by] &&
						  ((typeof elem[filter.by] === "string" &&
								filter.val.toLowerCase() ===
									elem[filter.by].toLowerCase()) ||
								(elem[filter.by].length > 0 &&
									elem[filter.by]
										.toLocaleString()
										.includes(filter.val)))
						: elem[filter.by] &&
						  ((typeof elem[filter.by] === "string" &&
								filter.val.toLowerCase() ===
									elem[filter.by].toLowerCase()) ||
								(elem[filter.by].length > 0 &&
									elem[filter.by]
										.toLocaleString()
										.includes(filter.val)))
				) {
					return (
						<CountryCard
							key={nanoid()}
							name={elem.name}
							flag={elem.flags.png}
							population={elem.population.toLocaleString()}
							region={elem.region}
							capital={elem.capital}
							native={elem.nativeName}
							handleClick={handleClick}
							sub={elem.subregion}
							domain={elem.topLevelDomain}
							currencies={elem.currencies}
							languages={elem.languages}
							borders={elem.borders}
						/>
					);
				}
			})
		);
	}, [filter, data]);
	return (
		<main className={props.darkMode ? "dark" : ""}>
			{content ? (
				content
			) : cards.length > 0 ? (
				<div className="main--content">
					<div className="main--search-container">
						<input
							type="text"
							onChange={handleChange}
							placeholder="Search for the country ... "
						/>
						<div className="search--filter">
							Filter by:{" "}
							<select
								name="filterBy"
								onChange={handleSelect}
								defaultValue=""
							>
								<option disabled value={""}>
									Select a filter
								</option>
								<option value="languages">Languages</option>
								<option value="region">Regions</option>
								<option value="currencies">Currencies</option>
							</select>
							{filter.by && (
								<select
									name="filter"
									onChange={handleFilter}
									defaultValue={filter.val}
								>
									<option value="" disabled>
										Select one option
									</option>
									{[...filterList[filter.by]].map((elem) => (
										<option
											key={nanoid()}
											value={elem}
											selected={elem === filter.val}
										>
											{elem}
										</option>
									))}
								</select>
							)}
						</div>
					</div>
					<div className="main--cards">{cards}</div>
				</div>
			) : (
				"Loading . . ."
			)}
		</main>
	);
};

export default Main;
