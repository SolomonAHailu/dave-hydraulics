import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { GiCrossMark } from "react-icons/gi";

import "./index.scss";
import { Divider } from "@mui/material";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <GiCrossMark width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <Divider />
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/courses">
                Courses
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/our-team">
                Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link
                className={`home-link ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`about-link ${
                  location.pathname === "/about" ? "active-link" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`courses-link ${
                  location.pathname === "/courses" ? "active-link" : ""
                }`}
                to="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className={`team-link ${
                  location.pathname === "/our-team" ? "active-link" : ""
                }`}
                to="/our-team"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className={`contact-link ${
                  location.pathname === "/contact" ? "active-link" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/login">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <TiThMenu width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
