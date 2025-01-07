import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero.js";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Hero />} exact />
			</Routes>
		</Router>
	);
}

export default App;
