import React, { useState } from "react";
import Logo from "./images/dstudioslogo.png";
import "./styles/Navbar.css";

const Navbar = ({ setActiveSection }) => {
	const [activeLink, setActiveLink] = useState(null);

	const handleLinkClick = (section) => {
		setActiveSection(section);
		setActiveLink(section);
	};

	return (
		<nav className="navbar">
			<div className="logospacer">
				<div className="logocontainer">
					<button
						className={`navlinkspecial ${
							activeLink === "Home" ? "active" : ""
						}`}
						onClick={() => handleLinkClick("Home")}
					>
						<img id='logo' src={Logo} alt="RDS Logo" className="navbarlogo" />
						
					</button>
				</div>
			</div>
			<div className="navbarcontainer">
				{/* <ul className="navmenu">
					<li className="navitem">
						<button
							className={`navlinks ${
								activeLink === "Lighting" ? "active" : ""
							}`}
							onClick={() => handleLinkClick("Lighting")}
						>
							DJ Practice Rental
						</button>
					</li>
					<li className="navitem">
						<button
							className={`navlinks ${
								activeLink === "Cinematography" ? "active" : ""
							}`}
							onClick={() => handleLinkClick("Cinematography")}
						>
							Event Space Rental
						</button>
					</li>
				
				</ul> */}
			</div>
		</nav>
	);
};

export default Navbar;
