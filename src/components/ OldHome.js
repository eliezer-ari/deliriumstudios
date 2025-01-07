import React, { useState, useEffect, useRef } from "react";
import "./styles/Standard.css";
import "./styles/Navbar.css";
import Contact from './Contact.js';
import Calendar from './Calendar.js';


import Logo from './images/dstudioslogo.png';
import Splash from './images/splash.png';

import { Link, Element } from "react-scroll";

const handleScroll = () => {
	console.log("Scrolling initiated");
	const scrollAmount = window.innerHeight - 100;
	console.log("Scroll amount:", scrollAmount);
	window.scrollBy({
	  top: scrollAmount,
	  behavior: 'smooth',
	});
  };


const Home = () => {
	const videoUrl =
		"https://portfolio-videos-current.s3.us-east-1.amazonaws.com/homereeldesktop.mp4";
	const mobileVideoUrl =
		"https://portfolio-videos-current.s3.us-east-1.amazonaws.com/homereelmobile.mp4";

	const desktopVideoRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);
	const videoRef = useRef(null);

	// Check if it's mobile or desktop
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 960px)");
		setIsMobile(mediaQuery.matches);

		const handleMediaChange = (e) => {
			setIsMobile(e.matches);
			console.log("Media change detected:", e.matches);
		};

		mediaQuery.addEventListener("change", handleMediaChange);
		return () => mediaQuery.removeEventListener("change", handleMediaChange);
	}, []);

	// Attempt to play video when mounted or when `isMobile` changes
	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			console.log("Attempting to play video directly on mount/change.");

			video
				.play()
				.then(() => {
					console.log("Video playback successful.");
					// Check dimensions and visibility
					const rect = video.getBoundingClientRect();
					console.log("Video dimensions:", rect.width, "x", rect.height);
					console.log(
						"Video is visible:",
						rect.width > 0 &&
							rect.height > 0 &&
							rect.top >= 0 &&
							rect.bottom <= window.innerHeight
					);
				})
				.catch((error) => {
					console.error("Video playback failed:", error);
				});
		} else {
			console.log("Video ref is not available.");
		}
	}, [isMobile]);

	const containerRef = useRef(null);

	return (
		<>
		<div className="standard-container">
			{/* <video
				ref={desktopVideoRef}
				src={isMobile ? mobileVideoUrl : videoUrl}
				autoPlay
				loop
				muted
				playsInline
				preload="auto"
				className={isMobile ? "video-background-mobile" : "video-background"}
				onCanPlay={() => console.log("Video can play")}
				onLoadedData={() => console.log("Video data loaded")}
				onPlay={() => console.log("Video is playing")}
				onError={(e) => console.error("Video error:", e)}
			/> */} 
			<img src={Splash} alt='splash' className="video-background" />
<div className="home-content">
<div className="home-text">

	<h1>A PREMIUM SPACE For exclusive, small scale events</h1>
	<div className="textsection">
		<h2>powerful JBL® sound system</h2>
		<h3>Two JBL® IRX112BT speakers. Two JBL® IRX115S subwoofers. 
		Crisp high frequencies. Earth-shattering bass. </h3>
	</div>
	<div className="textsection">
		<h2>professional dj equipment</h2>
		<h3>Two Pioneer® CDJ-2000 decks. One Pioneer® DJM-900 NXS2 mixer.
		Club-standard performance gear with studio-quality audio output.</h3>
	</div>
	<div className="textsection">
		<h2>Customizable RGB lighting</h2>
		<h3>Four Philips Hue® bulbs. One RGB light bar.  
		Dynamic light that moves with your music.</h3>
	</div>
	<button onClick={handleScroll} className="bookingbutton">
	Book Now</button>
	<h4>Just want to use our space for DJ practice? Click here</h4>
	</div>
</div>

		</div>
		<Element name="cal">
		<div className="standard-container-cal">
			<Calendar />		
		</div>	
		</Element>
				<div className="standard-container">
			<Contact />		
</div>
</>
	);
};

export default Home;
