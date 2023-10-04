import React, { useState } from "react";
import "./header.css";
import Resume from "../../assets/Resume.pdf";
import { Link } from "react-scroll";

const Header = () => {
  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  return (
    <header className="header">
      <nav className="nav container">
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className={click ? "nav__list grid active" : "nav__list grid"}>
            <li className="nav__item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="nav__link"
                onClick={closeMenu}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="nav__link"
              >
                <i className="uil uil-estate nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i> Projects
              </Link>
            </li>
            <li className="nav__item">
              <a
                href={Resume}
                className="nav__link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="uil uil-file-info-alt nav__icon"></i> Resume
              </a>
            </li>
            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                className="nav__link"
              >
                <i className="uil uil-message nav__icon"></i> Contact Me
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
