import React from "react";
import "./aboutus.css";
import picture from "../../assets/KU.jpeg";
import Cards from "../../common/Cards";
import cardpicture from "../../assets/logonsff.png";

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      title: "UI/UX Designer",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendisconsequuntur quis dolor minus beatae incidunt quia, libero possimuspraesentium laborum magni nam dolore? Quod perferendis et, maiores nemosequi doloremque?",
      picture: cardpicture,
    },
    {
      id: 2,
      title: "Frontend Developer",
      desc: "Hello I am frontend developer",
      picture: cardpicture,
    },
    {
      id: 3,
      title: "Backend Developer ",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendisconsequuntur quis dolor minus beatae incidunt qu",
      picture: cardpicture,
    },
  ];
  return (
    <section className="aboutus">
      <div className="aboutus-top">
        <div className="aboutus-top-left">
          <h2>
            Who, <span>I'm</span>
          </h2>

          <p className="p1">
            I'm student and studying BSCS at{" "}
            <span>NED UNIVERSIY OF ENG AND TECH</span>
          </p>

          <p className="p2">
            I use AdobeXd for <span>Figma design</span> as well.
          </p>
        </div>

        <div className="aboutus-top-right">
          <img src={picture} alt="Building" />
        </div>
      </div>

      <div className="aboutus-bottom-top">
        <div className="aboutus-bottom">
          <h2>What I Do</h2>
          <span>My Services</span>
        </div>



        <div className="aboutus-bottom-card">
          {cardsData.map((i, index) => {
            return <Cards title={i.title} desc={i.desc} picture={i.picture} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
