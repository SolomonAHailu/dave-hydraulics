import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Button from "@mui/material/Button";
import TechnoPicture from "../../../assets/home-assets/techno.png";

const SecondHero = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const spanRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const checkElementInView = (element) => {
        const bounding = element.getBoundingClientRect();
        return bounding.top >= 0 && bounding.bottom <= window.innerHeight;
      };

      if (checkElementInView(spanRef.current)) {
        setIsInViewport(true);
      } else {
        setIsInViewport(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="second-hero-container">
        <img src={TechnoPicture} alt="car-img" />
        <div>
          <span
            ref={spanRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Better every day
          </span>
          <h3
            ref={paragraphRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Let's change it up a bit
          </h3>
          <p
            ref={paragraphRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Explore our diverse array of meticulously crafted, user-friendly
            courses accessible across a multitude of platforms. Engage with us
            via our vibrant social media channels, where you can stay updated on
            the latest educational insights and connect with a community of
            fellow learners. Feel free to reach out to us at any moment; our
            dedicated team is here to provide guidance and support throughout
            every step of your enriching learning journey. Your pursuit of
            knowledge is our priority.
          </p>
          <Link to="/courses">
            <Button
              ref={buttonRef}
              variant="contained"
              size="large"
              className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
            >
              Find a class
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
