import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import useAnalytics from "../UseAnalytics";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [navhandle, setNavhandle] = useState(false);
  const gaEventTracker = useAnalytics("Navbar");

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const hamburgHandler = () => {
    console.log("clicked");
    setNavhandle(true);
  };

  return (
    <header>
      <nav
        className={
          colorChange
            ? "header-section colorChange navbar navbar-expand-lg"
            : "header-section navbar navbar-expand-lg"
        }
      >
        <div class="container-fluid">
          <a className="logo">
            <img
              src="https://ekak.in/assets/images/Ekak-12.png"
              className="img-fluid image-logo"
            ></img>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon
              className="navbar-toggler-icon"
              style={{ color: "white" }}
            ></MenuIcon>
          </button>
          <div
            class="collapse navbar-collapse navbar-background"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  activeClass="active"
                  to="home"
                  smooth={false}
                  offset={10}
                  className="nav-link nav-item"
                  onClick={() => gaEventTracker("home")}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  activeClass="active"
                  to="sector"
                  smooth={false}
                  offset={-150}
                  className="nav-link nav-item"
                  onClick={() => gaEventTracker("Approach")}
                >
                  Approach
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="team"
                  smooth={false}
                  offset={-150}
                  className="nav-link nav-item"
                  onClick={() => gaEventTracker(" Ekak Values")}
                >
                  Ekak Values
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="contact"
                  smooth={false}
                  offset={-150}
                  className="nav-link nav-item"
                  onClick={() => gaEventTracker("Contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
