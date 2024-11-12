import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import rigoImage from "../../img/rigo-baby.jpg";



//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>
		<Jumbotron/>
		<div className="d-lg-flex justify-content-center p-3">
	    <Cards title="zapatillas" description="ldkfdkjsnfkjdnfd" image={rigoImage}/>
	    <Cards title="zapatillas" description="ldkfdkjsnfkjdnfd" image={rigoImage}/>
	    <Cards title="zapatillas" description="ldkfdkjsnfkjdnfd" image={rigoImage}/>
	    <Cards title="zapatillas" description="ldkfdkjsnfkjdnfd" image={rigoImage}/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
