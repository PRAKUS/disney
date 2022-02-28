import React from "react";
import { Navbar } from "./Components";
import { Landing, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
