import React from "react";
import teamData from "../../data/teamData";
import TeamMember from "../../components/TeamComps/TeamMember";
import "./index.scss";
import HeroBG from "../../assets/home-assets/hero-bg.png";

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <img className="bg-shape" src={HeroBG} alt="bg-shape" />

      <div className="content">
        <h2>Our Team</h2>
        <div className="team-members">
          {teamData.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
