import React from "react";
import "./projects.css";
import Cards from "../../common/Cards";
import KU from "../../assets/KU.jpeg";

const Projects = () => {
  const projectData = [
    {
      title: "Project Title",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
    {
      title: "Moiz",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
    {
      title: "ECommerce",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
    {
      title: "Landing Page",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
    {
      title: "Landing Page",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
    {
      title: "Landing Page",
      picture: KU,
      desc: "hello World hello World hello World hello World hello World ",
      button: true,
    },
  ];
  return (
    <div className="projects">
      <h2>
        <span>Projects </span>I have done
      </h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim
        eius sit suscipit dolorum excepturi soluta maxime quos, molestias, nam
        ratione aspernatur esse, cupiditate voluptatem? Vitae exercitationem
        consectetur autem necessitatibus.
      </p>

      <div className="project-cards">
        {projectData.map((i, index) => (
          <Cards
            title={i.title}
            picture={i.picture}
            desc={i.desc}
            button={i.button}
            link={"https://www.google.com"}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
