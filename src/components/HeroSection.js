import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			{/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
			{/* <h1>ADVENTURE AWAITS</h1> */}
			<h1>Discover, collect, and sell extraordinary NFTs</h1>
			<div className="hero-btns">
				<Button className="btns" buttonStyles="btn--outline" buttonSize="btn--large">
					EXPLORE
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
