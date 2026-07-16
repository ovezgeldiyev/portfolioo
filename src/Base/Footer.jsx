import React from "react";
import { github, instagram, telegram, whatsapp } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-row">
            <div className="footer__inner-main">
              <div className="footerImage">
                <img src="/images/about.webp" alt="about" />
                <a href="https://www.fiverr.com/s/Eg31VoY" target="_blank" rel="noreferrer">
                  <img src="/images/icons/fiverr.svg" alt="fiverr" />
                </a>
              </div>
              <div className="footerTitle">
                <h6>Let’s Build Something Great Together!</h6>
                <p className="sm">
                  Visit my Fiverr profile to get started on your next project
                  today.
                </p>
              </div>
            </div>
            <div className="footer__inner-social">
              <a href="/">
                {instagram}
                Instagram
              </a>
              <a href="https://t.me/agabay0102" target="_blank" rel="noreferrer">
                {telegram}
                Telegram
              </a>
              <a href="https://github.com/ovezgeldiyev" target="_blank" rel="noreferrer">
                {github}
                Github
              </a>
              <a href="https://wa.me/99362523126" target="_blank" rel="noreferrer">
                {whatsapp}
                WhatsApp
              </a>
            </div>
            <div className="footer__inner-links">
              <div className="footer__inner-col">
                <a href="#about">About me</a>
                <a href="#projects">Portfolio</a>
                <a href="#experience">Experience</a>
              </div>
              <div className="footer__inner-col">
                <a href="#services">Services</a>
                <a href="#contact">Contact me</a>
              </div>
            </div>
          </div>
          <div className="footer__inner-copy">
            <div className="footer__inner-side">
              <a href="/" className="footer__inner-logo">
                <span>
                  <img src="./images/logo.webp" alt="logo" />
                </span>
                <b>A.Ovezgeldiyev</b>
              </a>
              <p className="ex">© 2022</p>
            </div>
            <div className="footer__inner-terms">
              <a href="/">@agabay</a>
              <a href="/">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
