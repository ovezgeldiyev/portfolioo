import React from "react";
import { arrowRight } from "../../Base/SVG";

export default function Experience() {
  return (
    <section className="experience">
      <div className="auto__container">
        <div className="experience__inner">
          <div className="experience__inner-top">
            <div className="title">
              <h5>
                <span style={{ backgroundColor: "#CF3266" }}></span>
                Experience
              </h5>
              <h3>
                4+ Years of <br />
                Front-End Development
              </h3>
            </div>
            <div className="experience__inner-text">
              <p className="sm">
                Over the past four years, I've contributed to hundreds of
                real-world frontend projects, transforming Figma, PSD, and Adobe
                XD designs into responsive, production-ready websites using
                modern web technologies.
              </p>
              <a href="#projects" className="experience__inner-link">
                <b>View My Projects</b>
                <span>
                  <img src="/images/icons/arrow-right.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="experience__inner-content">
            <div className="experienceItem">
              <div className="experienceItem__head active">
                <div className="experienceItem__title">
                  <h5>Front-End Developer</h5>
                  <p>June 2022 – Present</p>
                </div>
                <div className="experienceItem__head-row">
                  <div className="experienceItem__tag">react</div>
                  <div className="experienceItem__tag">html</div>
                  <div className="experienceItem__tag">css</div>
                  <div className="experienceItem__tag">js</div>
                  <div className="experienceItem__tag">figma</div>
                  <button type="button" className="experienceItem__arrow">
                    {arrowRight}
                  </button>
                </div>
              </div>
              <div className="experienceItem__body">
                <div className="experienceItem__row">
                  <div className="experienceItem__image">
                    <div className="experienceItem__image-inner">
                      <img src="/images/experience/1.png" alt="" />
                    </div>
                  </div>
                  <div className="experienceItem__image">
                    <div className="experienceItem__image-inner">
                      <img src="/images/experience/2.png" alt="" />
                    </div>
                  </div>
                  <div className="experienceItem__image">
                    <div className="experienceItem__image-inner">
                      <img src="/images/experience/3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="experienceItem__text">
                  <p>
                    Since 2022, I've been collaborating on commercial frontend
                    projects for clients from different industries. My primary
                    responsibility is converting Figma, PSD, and Adobe XD
                    designs into responsive, pixel-perfect websites and React
                    applications. I've contributed to more than 300 projects,
                    including landing pages, multi-page websites, dashboards,
                    admin panels, and HTML email templates. Every project
                    focuses on clean code, responsive layouts, cross-browser
                    compatibility, and attention to detail. Technologies I
                    regularly work with include HTML, CSS, SCSS, JavaScript,
                    TypeScript, React, Next.js, Tailwind CSS, Git, and REST
                    APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
