import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade bottom duration={750} delay={100} distance="30px">
      <section className="about section" id="about">
        <Fade bottom duration={750} delay={200} distance="30px">
          <h2 className="section__title">About</h2>
        </Fade>
        <div className="about__data">
          <Fade left duration={750} delay={300} distance="30px">
            <div className="about__img" />
          </Fade>
          <Fade right duration={750} delay={300} distance="30px">
            <p className="about__description">
              Hi! I am an upcoming junior at Santa Clara University pursuing a
              Computer Science and Engineering degree.
              <br></br> <br></br>I am an organized and hard-working student that
              is open to learning new skills and starting new projects.
              <br></br> <br></br>I am currently looking for a Software
              Engineering Internship for Summer 2024.
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default About;
