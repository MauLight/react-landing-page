import React from "react";
import linkObj from "./propsLink/linkobj";
import jumboObj from './propsLink/jumboobj';
import cardOne from './propsLink/cardOne';
import cardTwo from './propsLink/cardTwo';
import cardThree from './propsLink/cardThree';
import cardFour from './propsLink/cardFour';
import cardFive from './propsLink/cardFive';
import Navbar from './navbar';
import Jumbotron from "./jumbotron";
import Card from './card';
import Footer from './footer';

const Home = () => {
	return (
		<div className="container wrapper">
			<div className="row">
				<div className="col-12">
					<Navbar
						name='Mau!'
						who={linkObj.who}
						are={linkObj.are}
						you={linkObj.you}
						tell={linkObj.tell}
					/>
				</div>
				<div className="col-12">
					<Jumbotron
						title={jumboObj.title}
						description={jumboObj.description}
						subtext={jumboObj.subtext}
						buttonURL={jumboObj.buttonURL}
						buttonLabel={jumboObj.buttonLabel}
					/>
				</div>
			</div>
			<div className="row">
				<Card
					img={cardFour.img}
					title={cardFour.title}
					description={cardFour.description}
					buttonURL={cardFour.buttonURL}
					buttonLabel={cardFour.buttonLabel}
				/>
				<Card
					img={cardTwo.img}
					title={cardTwo.title}
					description={cardTwo.description}
					buttonURL={cardTwo.buttonURL}
					buttonLabel={cardTwo.buttonLabel}
				/>
				<Card
					img={cardFive.img}
					title={cardFive.title}
					description={cardFive.description}
					buttonURL={cardFive.buttonURL}
					buttonLabel={cardFive.buttonLabel}
				/>
			</div>
			<div className="row justify-content-center">
				<Card
					img={cardOne.img}
					title={cardOne.title}
					description={cardOne.description}
					buttonURL={cardOne.buttonURL}
					buttonLabel={cardOne.buttonLabel}
				/>

				<Card
					img={cardThree.img}
					title={cardThree.title}
					description={cardThree.description}
					buttonURL={cardThree.buttonURL}
					buttonLabel={cardThree.buttonLabel}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

/*
<Card
img={cardOne.img}
title={cardOne.title}
description={cardOne.description}
buttonURL={cardOne.buttonURL}
buttonLabel={cardOne.buttonLabel}
/>

<Card
img={cardThree.img}
title={cardThree.title}
description={cardThree.description}
buttonURL={cardThree.buttonURL}
buttonLabel={cardThree.buttonLabel}
/>

*/
