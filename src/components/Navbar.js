import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Burger } from "../images/icon-hamburger.svg";

const links = ["Home", "About", "Contact", "Blog", "Careers"];

const Navbar = () => {
	return (
		<nav>
			<div className="container flex items-center justify-between py-5">
				<Logo />
				<ul className="hidden md:flex space-x-4 ">
					{links.map((link, index) => {
						return (
							<li key={index} className="nav-link">
								{link}
							</li>
						);
					})}
				</ul>
				<button className="btn hidden md:inline">Request Invite</button>
				<Burger className="inline md:hidden cursor-pointer" />
			</div>
		</nav>
	);
};

export default Navbar;
