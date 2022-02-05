import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<h1>Top collections over last 7 days!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/pic1.png"
							text="It's free! Just right click and save it!"
							label="Monkey"
							path="/products"
						/>
						<CardItem
							src="images/pic2.png"
							text="It's free! Just right click and save it!"
							label="Monkey"
							path="/products"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="../images/pic3.png"
							text="It's free! Just right click and save it!"
							label="Character"
							path="/products"
						/>
						<CardItem
							src="images/pic4.png"
							text="It's free! Just right click and save it!"
							label="Character"
							path="/products"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/pic5.png"
							text="It's free! Just right click and save it!"
							label="Doodle"
							path="/products"
						/>
						<CardItem
							src="images/pic6.png"
							text="It's free! Just right click and save it!"
							label="Doodle"
							path="/products"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
