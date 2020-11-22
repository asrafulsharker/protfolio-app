import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I am Md Asraful",
    text:
      "i,m Md Asraful, professional web developer with long time \
    experience in this field​",
    image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                <a href="https://www.facebook.com/nirob.toxic">
                  <li>
                   <FaFacebookF className="headerIcon" ></FaFacebookF>
                  </li>
                  </a>
                  <a href="https://www.facebook.com/nirob.toxic">
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  </a>
                  <a href="https://github.com/asrafulnirob1376">
                  <li>
                    <FaGithub className="headerIcon" />
                  </li>
                  </a>
                  <a href="https://www.instagram.com/nirobasraful/?hl=en">
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                  </a>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline btn-border">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
