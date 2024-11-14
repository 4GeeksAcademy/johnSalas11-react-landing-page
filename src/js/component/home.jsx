import React from "react";
import { NavBar } from "./navBar";
import { Footer } from "./footer";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { products } from "./products";
import { Modal } from "./modal";

const Home = () => {
	return (
		<div>
		<NavBar/>
		<Modal/>
		<Jumbotron/>
			<div className="container-fluid d-lg-flex py-4 " id="cardsSection">
				{
					products.map((item, index) => (
						<Cards title={item.title} description={item.description} image={item.image} />
					))
				}
			</div>
		<Footer/>
		</div>
	);
};

export default Home;
