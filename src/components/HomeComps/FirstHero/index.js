import React from "react";
import { Link } from "react-router-dom";
import HeroBG from "../../../assets/home-assets/hero-bg.png";
import EngPicture from "../../../assets/home-assets/engineer.png";
import { BsCheckCircle } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import "./index.scss";
import educationPNG from "../../../assets/education.png";

function FirstHero() {
  const handleContactUs = () => {
    //to be done
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={HeroBG} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Unlock Your Potential</h4>
              <h1>
                Excel <span>academically</span> with our tutoring.
              </h1>
              <p>
                Enhance understanding with expert tutors offering personalized
                lessons. Benefit from flexible scheduling and access additional
                resources to support your learning journey, enabling you to
                surpass educational goals.
              </p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={handleContactUs}
                  className="hero-content__text__btns__book-ride btn41-43 btn-43"
                  to="/contact"
                >
                  Contact Us &nbsp; <BsCheckCircle size="18px" />
                </Link>
                <Link
                  className="hero-content__text__btns__learn-more"
                  to="/about"
                >
                  Learn More &nbsp; <FaAngleRight size="18px" />
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              // src={EngPicture}
              src={educationPNG}
              alt="img"
              className="hero-content__car-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FirstHero;
