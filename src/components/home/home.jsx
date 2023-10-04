import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Fade from "react-reveal/Fade";

const home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__content">
        <Data />
        <Fade bottom duration={750} delay={200} distance="30px">
          <Social />
        </Fade>
      </div>
      <Fade bottom duration={750} delay={300} distance="30px">
        <div className="scroll_button">
          <ScrollDown />
        </div>
      </Fade>
    </section>
  );
};

export default home;
