import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  function scrollFunc() {
    let header = document.getElementById("header");
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else header.classList.remove("sticky");
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="/" className="header__inner-logo">
            <span>
              <img src="./images/logo.webp" alt="logo" />
            </span>
            <b>A.Ovezgeldiyev</b>
          </a>
          <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
            <div className="nav__inner">
              <ul className="nav__inner-links">
                <li>
                  <a href="#about">About Me</a>
                </li>
                <li>
                  <a href="#projects">Portfolio</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
              <div className="nav__inner-button">
                <b>Book a call</b>
                <span>
                  <img src="/images/icons/arrow-right.svg" alt="" />
                </span>
              </div>
            </div>
          </nav>
          <div
            className={"burger " + (menu ? "active" : "")}
            id="menuBtn"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
