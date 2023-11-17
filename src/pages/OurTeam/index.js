import React from "react";
import teamData from "../../data/teamData";
import TeamMember from "../../components/TeamComps/TeamMember";
import "./index.scss";

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamData.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
