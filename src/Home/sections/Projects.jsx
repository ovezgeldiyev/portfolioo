import React from "react";
import Slider from "react-slick";
const projectsList = [
  {
    id: "1",
    image: "/images/projects/1.png",
    title: "Branda website",
    text: "Front end development and website animations",
    link: "#",
  },
  {
    id: "2",
    image: "/images/projects/2.png",
    title: "News art agency",
    text: "front end development and website animations",
    link: "#",
  },
  {
    id: "3",
    image: "/images/projects/3.png",
    title: "Kyrotopia LLC",
    text: "Design and website development",
    link: "#",
  },
  {
    id: "4",
    image: "/images/projects/1.png",
    title: "Branda website",
    text: "Front end development and website animations",
    link: "#",
  },
];
export default function Projects() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="projects">
      <div className="auto__container">
        <div className="projects__inner">
          <div className="title">
            <h5>
              <span style={{ backgroundColor: "#ebc23a" }}></span>
              <b>Portfolio</b>
            </h5>
            <h2>
              Bringing Ideas <br />
              to Life
            </h2>
          </div>
          <Slider {...settings} className="projects__inner-slider">
            {projectsList.map((item, index) => {
              return <ProjectsItem {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
const ProjectsItem = (props) => {
  return (
    <a href={props.link} className="projectsItem">
      <div className="projectsItem__image">
        <img src={props.image} alt="" />
        <span>
          <img src="/images/icons/arrow-right.svg" alt="" />
        </span>
      </div>
      <div className="projectsItem__content">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </a>
  );
};
