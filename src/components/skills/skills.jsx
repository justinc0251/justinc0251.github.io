import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Fade from "react-reveal/Fade";

const skills = () => {
  return (
    <Fade bottom duration={750} delay={100} distance="30px">
      <section className="skills section" id="skills">
        <Fade bottom duration={750} delay={200} distance="30px">
          <h2 className="section__title" id="skills-title">
            Skills
          </h2>
        </Fade>
        <Fade bottom duration={750} delay={300} distance="30px">
          <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Tools />
          </div>
        </Fade>
      </section>
    </Fade>
  );
};

export default skills;
