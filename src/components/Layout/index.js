import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import "./index.scss";
import Navbar from "../Navbar";

const Layout = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="layout-container">
      <Navbar />
      <div className="content-container">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
      {/* page up */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        ^
      </div>
    </div>
  );
};

export default Layout;
