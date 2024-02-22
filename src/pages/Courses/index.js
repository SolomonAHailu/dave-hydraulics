import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";
import { FiDollarSign } from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import { FaTelegramPlane, FaYoutube, FaFacebookF } from "react-icons/fa";
import courseData from "../../data/courseData";
import EduPicture from "../../assets/courses-assets/edu.png";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import "./index.scss";
import { Pagination, Stack } from "@mui/material";

const Courses = () => {
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return courseData.slice(startIndex, endIndex);
  };

  return (
    <div className="courses-container">
      <img src={EduPicture} alt="" />
      {getCurrentPosts().map((course) => {
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
                      It's absolutely for free &nbsp;&nbsp;
                      <span>
                        <ImCheckboxChecked />
                      </span>
                    </p>
                  ) : (
                    <p>
                      This is just the intro, the full course is for
                      <span>
                        <FiDollarSign />
                        {course.price} &nbsp;&nbsp;
                      </span>
                      <Button variant="contained">
                        <FaPaypal />
                      </Button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Stack spacing={2} style={{ alignItems: "center" }}>
        <Pagination
          style={{ color: "#ff4d30" }}
          size="large"
          count={Math.ceil(courseData.length / postsPerPage)}
          shape="rounded"
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
        />
      </Stack>
    </div>
  );
};

export default Courses;
