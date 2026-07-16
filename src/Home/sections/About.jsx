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
                Hi, I'm Agabay, a Front-End Developer with over 4 years of
                experience building responsive, pixel-perfect websites from
                Figma, PSD, and Adobe XD designs. I enjoy transforming creative
                ideas into fast, modern, and user-friendly web experiences using
                clean and maintainable code.
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
            <h2>300+</h2>
            <p>
              Front-end projects completed, including landing pages, multi-page
              websites, dashboards, and responsive email templates.
            </p>
            <div className="aboutCard__image">
              <img src="/images/about.webp" alt="about" />
            </div>
          </div>
          <div className="about__inner-col">
            <ul>
              <li>
                <span>
                  <img src="/images/icons/star-circle.svg" alt="" />
                </span>
                <p>
                  Over 4 years of experience creating responsive, cross-browser,
                  and pixel-perfect websites with HTML, CSS, JavaScript, React,
                  TypeScript, and Next.js.
                </p>
              </li>
              <li>
                <span>
                  <img src="/images/icons/star-circle.svg" alt="" />
                </span>
                <p>
                  Worked on more than 300 real-world frontend projects in
                  collaboration with experienced developers, delivering clean,
                  maintainable code with strong attention to detail and design
                  accuracy.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
