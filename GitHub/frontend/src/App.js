import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import diffPage from "./Components/DiffPage";
import Navbar from "./Components/Navbar";
// import Home from "./components/Home";
import RaiseBugs from "./Components/RaiseBugs";
import ResolveBugs from "./Components/ResolveBugs";
import RemoveBugs from "./Components/RemoveBugs";
// import SignUp from "./components/SignUp";

import About from "./Components/About";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Navbar />
								<HomePage />
							</div>
						}
					/>
					<Route path="/diffpage" element={<diffPage />} />
					{/* <Route exact path="/Home" element={<Home />} /> */}
					<Route
						exact
						path="/raisebugs"
						element={
							<div>
								<Navbar />
								<RaiseBugs />
							</div>
						}
					/>
					<Route
						exact
						path="/resolvebugs"
						element={
							<div>
								<Navbar />
								<ResolveBugs />
							</div>
						}
					/>
					<Route
						exact
						path="/RemoveBugs"
						element={
							<div>
								<Navbar />
								<RemoveBugs />
							</div>
						}
					/>
					<Route
						exact
						path="/About"
						element={
							<div>
								<Navbar />
								<About />
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
