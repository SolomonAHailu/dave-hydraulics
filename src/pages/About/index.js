import React from "react";
import "./index.scss";
import AboutUsPicture from "../../assets/about-assets/about-us.png";
import MissionPicture from "../../assets/about-assets/mission.png";
import VisionPicture from "../../assets/about-assets/vision.png";
import HeroBG from "../../assets/home-assets/hero-bg.png";

const About = () => {
  return (
    <div className="about-container">
      <img className="bg-shape" src={HeroBG} alt="bg-shape" />
      <div className="about-content">
        <div className="each">
          <h2>About Us</h2>
          <div className="pic-and-paragraph">
            <img src={AboutUsPicture} alt="About Us" />
            <p>
              Founded in 2019 by David A., David Hydraulics and Hydrology stands
              as a beacon of excellence in Addis Ababa, Ethiopia. In the heart
              of this vibrant city, our journey has evolved through
              transformative phases, making Ethiopia, with its distinction as a
              water resource hub and ownership of the world's largest river, our
              proud home. Specializing in comprehensive hydraulics and
              hydrological solutions, we extend our reach globally, serving
              clients with a commitment to innovation.
              <br />
              <br />
              Our success is woven into the fabric of strong partnerships.
              Engaging actively with collaborators, we propel continuous
              advancement in the dynamic fields of hydraulics and hydrology.
              Together, we navigate the waters of progress and excellence,
              ensuring sustainable solutions for a water-centric future. Join us
              in this extraordinary journey, where expertise, innovation, and a
              dedication to global impact converge.
            </p>
          </div>
        </div>
        <div className="each">
          <h2>Our Mission</h2>
          <div className="pic-and-paragraph">
            <img src={MissionPicture} alt="{About Us" />
            <p>
              At David Hydraulics and Hydrology, our commitment goes beyond the
              ordinary, evolving into a steadfast mission to lead in digital
              excellence within hydraulics and hydrology. Since our 2019
              establishment under David A.'s visionary leadership, we've
              dedicated ourselves to crafting a digital landscape that spans
              vast expanses and enriches experiences.
              <br />
              <br />
              Our mission is more than conveying information; it's a dance with
              digital dynamism, aiming to provide a comprehensive suite of
              resources and cutting-edge educational content. We are dedicated
              to empowering individuals and organizations globally in the
              intricate realm of water science and engineering, recognizing the
              need to navigate complexities with finesse.
            </p>
          </div>
        </div>
        <div className="each">
          <h2>Our Vision</h2>
          <div className="pic-and-paragraph">
            <img src={VisionPicture} alt="{About Us" />
            <p>
              At David Hydraulics and Hydrology, our visionary pursuits drive a
              transformative paradigm shift in water-centric endeavors. We aim
              to evolve into a global nexus, inviting professionals,
              researchers, and learners worldwide to actively engage in our
              dynamic online ecosystem. Our platform aspires to be a cornerstone
              for collaboration, seamlessly combining expertise and innovation.
              <br />
              <br />
              Within this virtual realm, our overarching goal is to inspire
              continuous advancements in water science and engineering. More
              than an information hub, we envision our platform as a vibrant
              community where connections are forged, sparking creativity.
              Through collaborative efforts and a commitment to excellence, we
              strive to lead sustainable practices in water science and
              engineering. At David Hydraulics and Hydrology, our vision is to
              actively shape and lead the evolution of water-centric endeavors
              on a global scale, making enduring contributions that echo across
              borders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
