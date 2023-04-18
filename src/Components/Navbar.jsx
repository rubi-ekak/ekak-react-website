import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import { Link, animateScroll as scroll } from "react-scroll";
// import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <header
      className={colorChange ? "header-section colorChange" : "header-section "}
     
    >
      <div className="row navbar-color ">
        {/* <div className="col-lg-2 col-sm-1 logo">
          <img src="https://ekak.in/assets/images/Ekak-12.png" className="img-fluid image-logo"></img>
        </div> */}
        <div className="  h-auto d-flex justify-items-center ">
          <div className="">
            <nav className="navbar navbar-expand-lg">
              <div className="col-lg-2 col-sm-1 logo">
                <img
                  src="https://ekak.in/assets/images/Ekak-12.png"
                  className="img-fluid image-logo"
                ></img>
              </div>

              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    {/* <NavLink to="/" className="nav-link active nav-item" >
                      Home
                    </NavLink> */}
                    <Link
    activeClass="active"
    to="home"
    // spy={true}
    smooth={false}
    offset={10}
    // duration={500}
    className="nav-link nav-item"
>Home</Link>



                    <Link
    activeClass="active"
    to="sector"
    // spy={true}
    smooth={false}
    offset={350}
    // duration={500}
    className="nav-link nav-item"
> Approach</Link>
                    {/* <HashLink smooth to='/#sector' className="nav-link nav-item" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
>  Approach </HashLink> */}
                    {/* <a href="#sector" className="nav-link nav-item">
                      Approach
                    </a> */}



<Link
    // activeClass="active"
    to="team"
    // spy={true}
    smooth={false}
    offset={-150}
    // duration={500}
    className="nav-link nav-item"
>  Ekak Values</Link>
                    {/* <a href="#team" className="nav-link nav-item">
                      Ekak Values
                    </a> */}

                    {/* <a href="#contact" className="nav-link">
                      Contact
                    </a> */}
                    <Link
    // activeClass="active"
    to="contact"
    // spy={true}
    smooth={false}
    offset={-150}
    // duration={500}
    className="nav-link nav-item"
>   Contact</Link>


                  </div>
                </div>
              </div>
            </nav>
            {/* </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
