import React from "react";
import { fiverr, github, instagram, telegram, whatsapp } from "../../Base/SVG";

export default function Contact() {
  return (
    <section className="contact">
      <div className="auto__container">
        <div className="contact__inner">
          <div className="contact__inner-row">
            <div className="contact__inner-content">
              <div className="title">
                <h5>
                  <span style={{ backgroundColor: "#EB8B37" }}></span>
                  Contact me
                </h5>
                <h2>
                  Let’s Get in <br />
                  Touch
                </h2>
              </div>
              <p className="ex">Fill the form or follow on:</p>
              <div className="contact__inner-social">
                <a href="#">{telegram}</a>
                <a href="#">{github}</a>
                <a href="#">{instagram}</a>
                <a href="#" className="mid">
                  {whatsapp}
                </a>
                <a href="#" className="big">
                  {fiverr}
                </a>
              </div>
            </div>
            <div className="contact__inner-form">
              <div className="input">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input">
                <textarea
                  name=""
                  id=""
                  rows={2}
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
