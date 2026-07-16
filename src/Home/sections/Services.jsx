import React from "react";

export default function Services() {
  return (
    <section className="services">
      <div className="auto__container">
        <div className="services__inner">
          <div className="services__inner-top">
            <div className="title">
              <h5>
                <span style={{ backgroundColor: "#CF3266" }}></span>
                Services
              </h5>
              <h2>Code. Create. Deliver.</h2>
            </div>
            <div className="services__inner-text">
              <p className="sm">
                I specialize in turning Figma, PSD, and Adobe XD designs into
                fast, responsive, and pixel-perfect websites. Whether you need a
                landing page, multi-page website, or React application, I build
                clean, maintainable front-end solutions ready for production.
              </p>
              <a href="#contact" className="services__inner-link">
                <b>Let's Work Together</b>
                <span>
                  <img src="/images/icons/arrow-right.svg" alt="" />
                </span>
              </a>
            </div>
          </div>
          <div className="services__inner-row">
            <div className="servicesCard">
              <h5>
                <span style={{ backgroundColor: "#C65FCF" }}></span>
                <b>Figma to HTML & React</b>
              </h5>

              <p className="sm">
                I convert Figma, PSD, and Adobe XD designs into clean,
                responsive, pixel-perfect websites using modern front-end
                technologies while preserving every detail of the original
                design.
              </p>

              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Pixel Perfect Development:</b> Accurate implementation
                    that matches your design with attention to spacing,
                    typography, and layout.
                  </p>
                </li>

                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Responsive Design:</b> Websites optimized for desktop,
                    tablet, and mobile devices with smooth user experience.
                  </p>
                </li>

                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Modern Technologies:</b> HTML5, CSS3, JavaScript, React,
                    Next.js, TypeScript and Tailwind CSS.
                  </p>
                </li>
              </ul>
            </div>
            <div className="servicesCard">
              <h5>
                <span
                  style={{ backgroundColor: "rgba(229, 148, 205, 0.8)" }}
                ></span>
                <b>Responsive Web Development</b>
              </h5>
              <p className="sm">
                I develop fast, responsive websites with clean architecture,
                reusable components, and maintainable code suitable for
                long-term projects.
              </p>
              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Landing & Multi-page Websites:</b> Professional websites
                    built from scratch based on your design requirements.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Cross-Browser Compatibility:</b> Consistent appearance
                    and functionality across Chrome, Firefox, Safari, Edge, and
                    more.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Reusable Components:</b> Well-structured HTML, CSS,
                    React, and Next.js code that is easy to maintain and extend.
                  </p>
                </li>
              </ul>
            </div>
            <div className="servicesCard">
              <h5>
                <span
                  style={{ backgroundColor: "rgba(235, 93, 109, 0.8)" }}
                ></span>
                <b>Performance & Code Quality</b>
              </h5>
              <p className="sm">
                Every project is built with performance, readability, and
                scalability in mind, ensuring fast loading websites and clean
                code for future updates.
              </p>
              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Semantic HTML & SEO:</b> Proper HTML5 structure that
                    improves accessibility and search engine optimization.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Performance Optimization:</b> Optimized assets, clean
                    CSS, and efficient JavaScript for faster page loading.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    <b>Clean Code:</b> Readable, scalable, and maintainable code
                    following modern front-end development practices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
