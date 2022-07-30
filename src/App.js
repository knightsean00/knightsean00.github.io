import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/Home';
import NotFound from './routes/404/NotFound';
import CardDisplay from "./components/CardDisplay";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/projects" element={<CardDisplay type="project" />} />
					{/* <Route exact path="/music" element={<CardDisplay type="music" />} /> */}
					<Route element={<NotFound />} />
				</Routes>
			</Router>
		)
	}
}

export default App;
