import React from "react";

const cards = [
	{
		icon: "url(../images/icon-online.svg)",
		title: "Online Banking",
		text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		icon: "url(../images/icon-online.svg)",
		title: "Simple Budgeting",
		text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
	},
	{
		icon: "url(../images/icon-online.svg)",
		title: "Fast Onboarding",
		text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		icon: "url(../images/icon-online.svg)",
		title: "Open API",
		text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
];

const Section_2 = () => {
	return (
		<section className="bg-light-gray">
			<div className="container">
				<h2 className="section-title">Why choose Easybank?</h2>
				<p className="section-text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
				<div className="grid">
					{cards.map((card, index) => {
						return (
							<div key={index}>
								<h3 className="card-title">{card.title}</h3>
								<p className="card-text">{card.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Section_2;
