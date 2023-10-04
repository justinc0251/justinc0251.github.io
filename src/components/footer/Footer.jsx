import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/justin-chung-a7b966226/"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/justinc0251"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="mailto:jdchung@scu.edu"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <p className="footer-info">
          © 2023 Justin Chung <br></br>
          Built using React and GitHub Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;
