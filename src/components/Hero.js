import React from "react";
import Button from "./Button";

import heroBg from "../images/image-mockups.png";

const Hero = () => {
	return (
		<section className="hero-img-section overflow-hidden bg-white pb-4">
			<div className="container grid gap-y-7 text-center">
				<img src={heroBg} alt="mobile app demo" className="-mt-14 " />
				<h1 className="title">Next generation digital banking</h1>
				<p className="section-text">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
				<Button />
			</div>
		</section>
	);
};

export default Hero;
