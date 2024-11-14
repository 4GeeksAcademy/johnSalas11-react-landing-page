import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import spa from "../../img/spa.jpg";
import belleza from "../../img/belleza.jpg";
import gimnasio from "../../img/gimnasio.jpg";
import masaje from "../../img/masaje.jpg";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar/>
		<Jumbotron/>
		<div className="d-lg-flex ms-3">
	    <Cards title="Spa" description="Vivamus nec viverra arcu. Vivamus pulvinar aliquet neque eu eleifend. Quisque ac tortor." image={spa}/>
	    <Cards title="Belleza" description="Imperdiet eros sed blandit rhoncus, Quisque ac tortor ac metus hendrerit." image={belleza}/>
	    <Cards title="Gimnasio" description="Vivamus nec viverra arcu. Vivamus pulvinar aliquet neque eu eleifend. Eros sed blandit." image={gimnasio}/>
	    <Cards title="Masajes" description="Imperdiet eros sed blandit rhoncus, Quisque ac tortor ac metus hendrerit." image={masaje}/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
