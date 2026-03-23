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
              <h2>
                Build. Design. <br />
                Optimize.
              </h2>
            </div>
            <div className="services__inner-text">
              <p className="sm">
                As a creative front-end developer, I provide a range of services
                designed to bring your digital vision to life. From custom
                website development to seamless user experiences, I specialize
                in building high-quality, responsive, and engaging websites
                tailored to meet your unique needs.
              </p>
              <div className="services__inner-link">
                <b>Book a call</b>
                <span>
                  <img src="/images/icons/arrow-right.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="services__inner-row">
            <div className="servicesCard">
              <h5>
                <span style={{ backgroundColor: "#C65FCF" }}></span>
                <b>Custom Website Development</b>
              </h5>
              <p className="sm">
                Every project is unique, and I build websites from scratch that
                reflect your brand’s identity. Using HTML, CSS, JavaScript, and
                modern frameworks, I create responsive, high-performance
                websites that work seamlessly across devices.
              </p>
              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Responsive Design: Websites that adapt beautifully on
                    mobile, tablet, and desktop.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Converting figma, photoshop, Adobe XD designs to responsive
                    websites
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Cross-Browser Compatibility: Ensuring consistent performance
                    across all browsers.
                  </p>
                </li>
              </ul>
            </div>
            <div className="servicesCard">
              <h5>
                <span
                  style={{ backgroundColor: "rgba(229, 148, 205, 0.8)" }}
                ></span>
                <b>UI/UX Design & Prototyping</b>
              </h5>
              <p className="sm">
                I combine aesthetics with usability to design interfaces that
                are both visually appealing and easy to navigate. My design
                process focuses on the user, creating intuitive flows that
                enhance the overall experience.
              </p>
              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Wireframes & Mockups: Creating blueprints for your website’s
                    structure and design.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Interactive Prototypes: Developing functional prototypes for
                    user testing and feedback.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    User-Centered Approach: Designs crafted with the end-user in
                    mind, ensuring engagement.
                  </p>
                </li>
              </ul>
            </div>
            <div className="servicesCard">
              <h5>
                <span
                  style={{ backgroundColor: "rgba(235, 93, 109, 0.8)" }}
                ></span>
                <b>Front-End Development</b>
              </h5>
              <p className="sm">
                I bring designs to life using the latest front-end technologies.
                My code is clean, maintainable, and optimized for performance.
              </p>
              <ul>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    HTML, CSS, JavaScript: Developing responsive and dynamic
                    user interfaces.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Framework: Proficient in React and modern, scalable
                    solutions.
                  </p>
                </li>
                <li>
                  <span>
                    <img src="/images/icons/asterisk.svg" alt="" />
                  </span>
                  <p className="sm">
                    Performance Optimization: Enhancing load times and
                    performance metrics.
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
