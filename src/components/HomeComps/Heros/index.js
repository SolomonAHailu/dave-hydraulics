import React from "react";
import FirstHero from "../FirstHero";
import SecondHero from "../SecondHero";
import ThirdHero from "../ThirdHero";
import "./index.scss";
import CustomizedAccordions from "../CustomizedAccordions";

const Heros = () => {
  return (
    <div className="heros-container">
      <div className="first-hero">
        <FirstHero />
      </div>
      <div className="second-hero">
        <SecondHero />
      </div>
      <div className="first-hero">
        <CustomizedAccordions />
      </div>
      <div className="third-hero">
        <ThirdHero />
      </div>
    </div>
  );
};

export default Heros;
