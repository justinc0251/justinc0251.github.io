import React from "react";
import postman_img from "../../assets/logos/postman.png";
import netlify_img from "../../assets/logos/netlify.png";

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-firebase-plain colored"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-heroku-plain colored"></i>
            <div>
              <h3 className="skills__name">Heroku</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={postman_img} alt="postman_logo"></img>
            <div>
              <h3 className="skills__name">Postman</h3>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="devicon-git-plain colored"></i>
            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="devicon-photoshop-plain colored"></i>
            <div>
              <h3 className="skills__name">Photoshop</h3>
            </div>
          </div>
          <div className="skills__data">
            <img src={netlify_img} alt="netlify_logo"></img>
            <div>
              <h3 className="skills__name">Netlify</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
