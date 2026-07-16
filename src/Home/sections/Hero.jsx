import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="auto__container">
        <div className="hero__inner">
          <div className="hero__inner-side">
            <p>Create Digitally</p>
            <p>2026</p>
          </div>
          <div className="hero__inner-content">
            <div className="hero__inner-info">
              <div className="heroItem">
                <div className="heroItem__number">
                  <sup>+</sup>
                  <b>300</b>
                </div>
                <p className="sm">Projects completed</p>
              </div>
              <div className="heroItem">
                <div className="heroItem__number">
                  <sup>+</sup>
                  <b>4</b>
                </div>
                <p className="sm">Years of experience</p>
              </div>
            </div>
            <div className="hero__inner-title">
              <h1>Hello</h1>
              <p>It’s A.Ovezgeldiyev web front end dev. UI/UX expert.</p>
            </div>
            <a href="#about" className="hero__inner-scroll">
              <b>Scroll down</b>
              <span>
                <img src="/images/icons/arrow-right.svg" alt="" />
              </span>
            </a>
          </div>
          <div className="hero__inner-image">
            <img src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
