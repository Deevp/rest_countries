import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode((prevMode) => !prevMode);
	}
	return (
		<div>
			<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Main darkMode={darkMode} />
		</div>
	);
};

export default App;
