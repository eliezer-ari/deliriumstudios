import React, { useEffect, useRef, useState } from "react";
import "./styles/Standard.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import Contact from "./Contact.js";
import Calendar from "./Calendar.js";
import Splash from "./images/splash.png";
import Logo from "./images/dstudioslogo.png";
import LogoInverted from "./images/dstudioslogoinverted.png";
import { Link, Element } from "react-scroll";

const Hero = () => {
  const targetRef = useRef(null); // Reference to the target element
  const logoRef = useRef(null); // Reference to the logo
  const [isLogoInverted, setIsLogoInverted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetTop = targetRef.current.getBoundingClientRect().top;

        console.log("Scroll Event Fired! Target Top Position:", targetTop);
        console.log("Logo currently inverted:", isLogoInverted);

        // Adjust threshold for triggering the logo change
        if (targetTop <= 50 && !isLogoInverted) {
          console.log("Changing logo to inverted.");
          setIsLogoInverted(true);
        } else if (targetTop > 50 && isLogoInverted) {
          console.log("Reverting logo to default.");
          setIsLogoInverted(false);
        }
      } else {
        console.error("Target element is undefined.");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLogoInverted]);

  useEffect(() => {
    if (logoRef.current) {
      // Update the logo based on the state
      console.log("Updating logo to:", isLogoInverted ? "Inverted" : "Default");
      logoRef.current.src = isLogoInverted ? LogoInverted : Logo;
    }
  }, [isLogoInverted]);

  return (
    <div id="hero" className="herocontainer">
      <img src={Splash} alt="Splash" className="video-background" />
      <div className="standard-container">
        <div className="home-content">
          <div className="home-text">
            <h1>A Premium Space for Exclusive, Small-Scale Events</h1>
            <div className="textsection">
              <h2>Powerful JBL® Sound System</h2>
              <h3>
                Two JBL® IRX112BT speakers. Two JBL® IRX115S subwoofers. Crisp
                high frequencies. Earth-shattering bass.
              </h3>
            </div>
            <div className="textsection">
              <h2>Professional DJ Equipment</h2>
              <h3>
                Two Pioneer® CDJ-2000 decks. One Pioneer® DJM-900 NXS2 mixer.
                Club-standard performance gear with studio-quality audio
                output.
              </h3>
            </div>
            <div className="textsection">
              <h2>Customizable RGB Lighting</h2>
              <h3>
                Four Philips Hue® bulbs. One RGB light bar. Dynamic light that
                moves with your music.
              </h3>
            </div>
            <Link
              to="cal"
              smooth={true}
              spy={true}
              duration={500}
              offset={0}
              className="bookingbutton"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <Element name="cal">
        <div ref={targetRef} id="target-element" className="standard-container-cal">
          <Calendar />
        </div>
      </Element>
      <div className="standard-container-contact">
        <Contact />
        <div className="bottom-text">Delirium Entertainment, Inc. © 2025</div>
      </div>
      {/* Conditionally hide the background */}
      <div
        className={`contact-bg ${isLogoInverted ? "hidden" : ""}`}
        style={{ display: isLogoInverted ? "block" : "none" }}
      />
      <div className="navreplacement">
        <nav className="navbar">
          <div className="logospacer">
            <div className="logocontainer">
              <img
                ref={logoRef}
                src={Logo}
                alt="RDS Logo"
                className="navbarlogo"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
