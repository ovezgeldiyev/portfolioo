import React from "react";

export default function About() {
  return (
    <section className="about">
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-col">
            <div className="about__inner-title">
              <h2>About me</h2>
              <p>
                Hi, I'm Madilyani a passionate and creative front-end developer
                with a love for crafting engaging and visually stunning user
                experiences. With a strong eye for design and a deep
                understanding of modern web technologies, I bring ideas to life
                through clean, responsive, and interactive code.
              </p>
            </div>
            <div className="about__inner-arrow">
              <img src="/images/curved-arrow.png" alt="" />
            </div>
          </div>
          <div className="aboutCard">
            <div className="aboutCard__icon">
              <img src="/images/icons/earth.svg" alt="" />
            </div>
            <h2>35%</h2>
            <p>
              World domination on Fiverr platform as top rated seller last 4+
              years.
            </p>
            <div className="aboutCard__image">
              <img src="/images/about.png" alt="" />
            </div>
          </div>
          <div className="about__inner-col">
            <a href="#" className="aboutLink">
              <div className="aboutLink__inner">
                <img src="/images/about.png" alt="" />
              </div>
              <span>
                <img src="/images/icons/arrow-right.svg" alt="" />
              </span>
            </a>
            <ul>
              <li>
                <span>
                  <img src="/images/icons/star-circle.svg" alt="" />
                </span>
                <p>
                  With over 5+ years in web front-end development, I’ve honed my
                  skills in building responsive, accessible, and visually
                  captivating websites.
                </p>
              </li>
              <li>
                <span>
                  <img src="/images/icons/star-circle.svg" alt="" />
                </span>
                <p>
                  As a top-rated seller on Fiverr, I’ve had the privilege of
                  working with clients from around the world, delivering
                  high-quality front-end development services that consistently
                  exceed expectations
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
