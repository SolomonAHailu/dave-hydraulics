import React from "react";
import "./index.scss";
import AboutUsPicture from "../../assets/about-assets/about-us.png";
import MissionPicture from "../../assets/about-assets/mission.png";
import VisionPicture from "../../assets/about-assets/vision.png";

const About = () => {
  return (
    <div className="about-container">
      <div>
        <div className="each">
          <h2>About Us</h2>
          <div className="pic-and-paragraph">
            <img src={AboutUsPicture} alt="About Us" />
            <p>
              Welcome to David Hydraulics and Hydrology, a distinguished
              establishment founded in 2019 under the visionary leadership of
              David A. Our remarkable journey has unfolded through various
              transformative phases, and we proudly call Addis Ababa, Ethiopia,
              our home—a nation distinguished as a water resource hub, boasting
              ownership of the largest river in the world.
              <br />
              <br />
              In the heart of this vibrant city, we have cultivated a culture of
              excellence and innovation. Specializing in comprehensive
              hydraulics and hydrological solutions, our reach extends far
              beyond borders, serving clients on a global scale. As stewards of
              knowledge, we passionately share our expertise through educational
              platforms, enlightening and empowering thousands of individuals
              around the world.
              <br />
              <br /> At David Hydraulics and Hydrology, our success is
              intricately woven with the strength of our partnerships. We are
              deeply grateful for the support of our collaborators, with whom we
              actively engage to propel continuous advancement. Together, we
              strive to be at the forefront of innovation in the dynamic fields
              of hydraulics and hydrology.
              <br />
              <br />
              Join us on this extraordinary journey, where expertise,
              innovation, and a commitment to global impact converge. Discover a
              world of possibilities as we navigate the waters of progress and
              excellence, ensuring sustainable solutions for a water-centric
              future.
            </p>
          </div>
        </div>
        <div className="each">
          <h2>Our Mission</h2>
          <div className="pic-and-paragraph">
            <img src={MissionPicture} alt="{About Us" />
            <p>
              At David Hydraulics and Hydrology, our unwavering commitment
              extends far beyond the ordinary; it is a steadfast mission to
              position ourselves at the forefront of digital excellence, where
              we proudly lead the charge in disseminating knowledge and
              propelling innovation within the dynamic realms of hydraulics and
              hydrology. Since our establishment in 2019, guided by the
              visionary leadership of David A., we have embarked on a journey
              marked by resolute dedication to crafting a digital landscape that
              not only spans vast expanses but also enriches the experiences of
              those navigating its depths.
              <br />
              <br />
              Our mission transcends the mere conveyance of information; it is
              an intricate dance with digital dynamism, a commitment to creating
              a multifaceted experience that defies conventional boundaries. We
              aspire to offer more than just knowledge – our aim is to provide a
              comprehensive suite of resources, cutting-edge educational
              content, and collaborative platforms meticulously designed to
              empower individuals and organizations on a global scale. This
              dedication is rooted in the understanding that in the intricate
              realm of water science and engineering, one must navigate
              complexities with finesse.
            </p>
          </div>
        </div>
        <div className="each">
          <h2>Our Vision</h2>
          <div className="pic-and-paragraph">
            <img src={VisionPicture} alt="{About Us" />
            <p>
              At David Hydraulics and Hydrology, our visionary pursuits
              transcend the limits of conventional thinking, propelling us to
              become the catalyst for a transformative paradigm in water-centric
              endeavors. Picture a future where our platform evolves into a
              global nexus, seamlessly bringing together expertise and
              innovation. Our vision is rooted in establishing our platform as a
              cornerstone for collaboration, inviting professionals,
              researchers, and learners from every corner of the world to
              actively engage in our dynamic online ecosystem.
              <br />
              <br />
              Within this virtual realm, our overarching goal is to inspire and
              facilitate continuous advancements in water science and
              engineering. We envision our platform as more than just a hub of
              information; it is a vibrant community where connections are
              forged, and the spark of creativity is ignited. Our aim is to
              contribute significantly to the global landscape of water resource
              management by fostering meaningful connections and catalyzing
              innovative thinking. Through collaborative efforts and a
              commitment to excellence, we strive to be at the forefront of
              sustainable and responsible practices in water science and
              engineering. By nurturing a culture of continuous learning and
              fostering a spirit of creativity, we aspire to make enduring
              contributions that echo across borders, making a positive impact
              on the way the world approaches the vital challenge of water
              resource management. In essence, at David Hydraulics and
              Hydrology, our vision is not just to adapt to change but to
              actively shape and lead the evolution of water-centric endeavors
              on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
