import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Home from "./Home";
const Navbar = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-2 border  h-auto d-flex align-items-center justify-content-center logo">
          <img src="https://ekak.in/assets/images/Ekak-12.png"></img>
        </div>
        <div className="col-lg-10 border  h-auto d-flex align-items-center justify-content-end">
          <div className="row d-flex flex-end">
            <div className="col-lg-12   h-auto border-bottom-0">
              <nav className="navbar navbar-expand-lg">
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
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <NavLink to="/"  className="nav-link active" >
                      Home 
                      </NavLink>
                     
                      <NavLink to="/cleanenergy" className="nav-link" >
                      Clean Energy
                      </NavLink>
                    
                      <NavLink  to="/mobility" className="nav-link">
                      Mobility
                      </NavLink>
                      <NavLink  to="/ekakshar" className="nav-link">
                      Ekakshar
                      </NavLink>
                      
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
