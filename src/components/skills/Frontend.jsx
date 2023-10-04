import React from "react";
import mapbox_img from "../../assets/logos/mapbox.png";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-html5-plain colored"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-css3-plain colored"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-javascript-plain colored"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-react-original colored"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-react-original colored"></i>
            <div>
              <h3 className="skills__name">React Native</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={mapbox_img} alt="mapbox_logo"></img>
            <div>
              <h3 className="skills__name">MapBox</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
