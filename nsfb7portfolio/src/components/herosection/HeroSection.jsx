import React from "react";
import "./herosection.css";
import picture from "../../assets/logonsff.png";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

const HeroSection = () => {
  return (
    <section className="herosection">
      <div className="herosection-left">
        <div className="herosection-left-top">
          <h2>
            Hello, <span>I'm</span>
          </h2>

          <div className="herosection-left-name">
            <h1>Nayee Subah Foundation</h1>
            <span>Educational institute and skills maker</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fuga est
            accusantium quos ullam reiciendis dicta placeat sit, assumenda fugit
            corporis a cumque omnis ipsum ex accusamus aliquam laborum quas.
          </p>

          <button>Let's start chat</button>
        </div>

        <div className="herosection-icons">
          <span>Follow me on: </span>

          <div>
            <CiTwitter className="icons" />
            <CiFacebook className="icons" />
            <CiLinkedin className="icons" />
            <IoLogoInstagram className="icons" />
          </div>
        </div>
      </div>

      <div className="herosection-right">
        <img src={picture} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
