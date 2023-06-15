import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-navbar fixed-top ">
    <div className="container-fluid">
      <a className="navbar-brand text-color brand-style" href="#">ekakshar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto undorder-list">
          <li className="nav-item px-2 text-color">
            <a className="nav-link active text-color" aria-current="page" href="#">about us</a>
          </li>
          <li className="nav-item px-2 text-color" >
            <a className="nav-link text-color" href="#">services</a>
          </li>
          <li className="nav-item px-2 text-color">
            <a className="nav-link text-color " href="#">quality</a>
          </li>
          <li className="nav-item px-2 text-color">
            <a className="nav-link text-color" href="#">careers</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <button className="btn btn-outline-color rounded-pill animate__animated animate__bounce" type="submit">become  partner</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
