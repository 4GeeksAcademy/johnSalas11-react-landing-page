import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>
		<Jumbotron/>
		<div className="d-flex justify-content-center ">
	    <Cards/>
	    <Cards/>
	    <Cards/>
	    <Cards/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
