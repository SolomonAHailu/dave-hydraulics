import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CoursesPicture from "../../../assets/home-assets/courses.png";
import "./index.scss";

const ThirdHero = () => {
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
      <div className="third-hero-container">
        <div>
          <span
            ref={spanRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Unleash your potential
          </span>
          <h3
            ref={paragraphRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Embark on a transformative journey
          </h3>
          <p
            ref={paragraphRef}
            className={`fade-in-paragraph ${isInViewport ? "fade-in" : ""}`}
          >
            Immerse yourself in our extensive collection of thoughtfully
            designed courses, tailored to be accessible on various platforms.
            Connect with our dynamic community through lively social media
            platforms, ensuring you're always in the loop with the latest
            educational trends. Our committed team is ready to assist you at any
            point, offering guidance and support to enhance your learning
            adventure. Your quest for knowledge remains at the forefront of our
            mission.
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
        <img src={CoursesPicture} alt="car-img" />
      </div>
    </section>
  );
};

export default ThirdHero;
