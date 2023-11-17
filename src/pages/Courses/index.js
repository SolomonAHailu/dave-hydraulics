import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { FiDollarSign } from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import { FaTelegramPlane, FaYoutube, FaFacebookF } from "react-icons/fa";
import courseData from "../../data/courseData";
import EduPicture from "../../assets/courses-assets/edu.png";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import "./index.scss";

const Courses = () => {
  return (
    <div className="courses-container">
      <img src={EduPicture} alt="" />
      {courseData.map((course) => {
        return (
          <div className="video-title-description">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src={course.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="title-description">
              <h3>{course.videoTitle}</h3>
              <div className="description-icons">
                <p>{course.videoDescription}</p>
                <div className="icons">
                  {course.freeOrNot ? (
                    <p>
                      It's free&nbsp;&nbsp;
                      <span>
                        <ImCheckboxChecked />
                      </span>
                    </p>
                  ) : (
                    <p>
                      With small fee&nbsp;&nbsp;
                      <span>
                        <FiDollarSign />
                      </span>
                      <Button variant="contained">
                        <FaPaypal />
                      </Button>
                    </p>
                  )}
                  <div className="socials">
                    <Tooltip title="YouTube" placement="top" arrow>
                      <span>
                        <FaYoutube />
                      </span>
                    </Tooltip>
                    <Tooltip title="Telegram" placement="top" arrow>
                      <span>
                        <FaTelegramPlane />
                      </span>
                    </Tooltip>
                    <Tooltip title="Facebook" placement="top" arrow>
                      <span>
                        <FaFacebookF />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
