import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					{/* <Route path='/services' component={Services} />
         <Route path='/products' component={Products} />
         <Route path='/sign-up' component={SignUp} /> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
