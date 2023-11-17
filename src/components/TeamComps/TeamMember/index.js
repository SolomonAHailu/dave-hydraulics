import React from "react";
import { Tooltip, Fade, Zoom } from "@mui/material";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import "./index.scss";

const TeamMember = ({ name, position, bio, imageUrl }) => {
  return (
    <div className="team-member-container">
      <div className="team-member">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <h6>{position}</h6>
        <p>{bio}</p>
      </div>
      <div className="socials">
        <Tooltip
          TransitionComponent={Zoom}
          leaveDelay={100}
          title="Telegram"
          placement="top"
          arrow
          Fade={Fade}
        >
          <span>
            <FaTelegramPlane />
          </span>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          leaveDelay={100}
          title="Facebook"
          placement="top"
          arrow
          Fade={Fade}
        >
          <span>
            <FaFacebookF />
          </span>
        </Tooltip>
        <Tooltip
          TransitionComponent={Zoom}
          leaveDelay={100}
          title="Instagram"
          placement="top"
          arrow
          Fade={Fade}
        >
          <span>
            <FaInstagram />
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default TeamMember;
