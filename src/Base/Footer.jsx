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
                <img src="/images/about.png" alt="" />
                <span>
                  <img src="/images/icons/fiverr.svg" alt="" />
                </span>
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
              <a href="#">
                {instagram}
                Instagram
              </a>
              <a href="#">
                {telegram}
                Telegram
              </a>
              <a href="#">
                {github}
                Github
              </a>
              <a href="#">
                {whatsapp}
                WhatsApp
              </a>
            </div>
            <div className="footer__inner-links">
              <div className="footer__inner-col">
                <a href="#">About me</a>
                <a href="#">Portfolio</a>
                <a href="#">Experience</a>
                <a href="#">Services</a>
              </div>
              <div className="footer__inner-col">
                <a href="#">Services</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact me</a>
              </div>
            </div>
          </div>
          <div className="footer__inner-copy">
            <div className="footer__inner-side">
              <a href="#" className="footer__inner-logo">
                <span></span>
                <b>D.Madilyani</b>
              </a>
              <p className="ex">© 2021</p>
            </div>
            <div className="footer__inner-terms">
              <a href="#">@madilyani</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
