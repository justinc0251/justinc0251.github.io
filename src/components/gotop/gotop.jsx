import React, { useEffect, useState } from "react";
import "./GoTop.css";
import { Link } from "react-scroll";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="arrow-icon"
        >
          <i class="bx bx-up-arrow-alt"></i>
        </Link>
      )}
    </div>
  );
};

export default GoTop;
