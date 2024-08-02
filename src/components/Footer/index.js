












import React from "react";
import "./index.scss";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li style={{ display: "flex", flexDirection: "column" }}>
                <span>DAVID</span>
              </li>
              <li style={{ color: "#706f7b" }}>
                Discover our extensive collection of educational materials
                designed to cater to your unique learning requirements. Whether
                you're seeking captivating courses or informative materials, we
                provide the ideal resources to enrich your educational
                experience.
              </li>
              <li>
                <a href="tel:+251993704033">
                  <BsFillTelephoneFill /> &nbsp; (+251) - 993 - 704 - 033
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                  dawit.asregedew2007@gmail.com"
                >
                  <GrMail />
                  &nbsp; dawit.asregedew2007@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/Solomon_a_hailu"
                >
                  Design by Solomon A.
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a style={{ color: "#706f7b" }} href="#home">
                  Addis Ababa
                </a>
              </li>
              <li>
                <a style={{ color: "#706f7b" }} href="#home">
                  Careers
                </a>
              </li>
              <li>
                <a style={{ color: "#706f7b" }} href="#home">
                  Mobile
                </a>
              </li>
              <li>
                <a style={{ color: "#706f7b" }} href="#home">
                  Blog
                </a>
              </li>
              <li>
                <a style={{ color: "#706f7b" }} href="#home">
                  How we work
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li style={{ color: "#706f7b" }}>Mon - Fri: 9:00AM - 9:00PM</li>
              <li style={{ color: "#706f7b" }}>Sat: 9:00AM - 19:00PM</li>
              <li style={{ color: "#706f7b" }}>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p style={{ color: "#706f7b" }}>
                  Subscribe your Email address for latest news & updates.
                </p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
