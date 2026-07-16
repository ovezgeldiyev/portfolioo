import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

const projectsList = [
  {
    id: "1",
    image: "/images/projects/draslovka.webp",
    title: "Draslovka",
    text: "Front end development and website animations",
    link: "https://draslovka.vercel.app/",
  },
  {
    id: "2",
    image: "/images/projects/sepex.webp",
    title: "Sepex website",
    text: "Front end development and website animations",
    link: "https://sepex.vercel.app/",
  },
  {
    id: "3",
    image: "/images/projects/yay.webp",
    title: "Yay website",
    text: "Front end development and website animations",
    link: "https://yay-iota-topaz.vercel.app/",
  },
  {
    id: "4",
    image: "/images/projects/tarre-rites.webp",
    title: "Tarré & Rites",
    text: "Front end development and website animations",
    link: "https://tarre-rites-seven.vercel.app/",
  },
  {
    id: "5",
    image: "/images/projects/marrowell.webp",
    title: "Marrowell",
    text: "Front end development and website animations",
    link: "https://marrowell-alpha.vercel.app/",
  },
  {
    id: "6",
    image: "/images/projects/moddys.webp",
    title: "Moddy's",
    text: "Front end development and website animations",
    link: "https://moddys-self.vercel.app/",
  },
  {
    id: "7",
    image: "/images/projects/senseLab.webp",
    title: "SenseLab",
    text: "Front end development and website animations",
    link: "https://sense-lab-eight.vercel.app/",
  },
];

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
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
              Bringing Ideas
              <br />
              to Life
            </h2>
          </div>
          <div className="projects__inner-wrapper">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={3}
              freeMode={true}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                650: {
                  slidesPerView: 2,
                },
                930: {
                  slidesPerView: 2.5,
                },
                1180: {
                  slidesPerView: 3,
                },
              }}
            >
              {projectsList.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProjectsItem {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-buttons">
              <button ref={prevRef} className="swiper-prev">
                <img src="/images/icons/arrow-right.svg" alt="" />
              </button>
              <button ref={nextRef} className="swiper-next">
                <img src="/images/icons/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectsItem = ({ image, title, text, link }) => {
  return (
    <a
      href={link}
      className="projectsItem"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="projectsItem__image">
        <img src={image} alt={title} />
      </div>
      <div className="projectsItem__content">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </a>
  );
};
