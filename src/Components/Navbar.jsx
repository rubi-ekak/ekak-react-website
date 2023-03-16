import React from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <section>
      <div className="container-fluid">
      <nav>
        <div className="row">
          <div className="col-lg-2 border  h-auto d-flex align-items-center justify-content-center logo">
            <img src="https://ekak.in/assets/images/Ekak-12.png"></img>
          </div>
          <div className="col-lg-10 border  h-auto d-flex align-items-center justify-content-end">
           

            <div>
              <div className="row d-flex flex-end">
                
                <div className="col-lg-12   h-auto border-bottom-0">
                  <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                      
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon "></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                      >
                        <div class="navbar-nav">
                          <a
                            class="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                          <a class="nav-link" href="#">
                            Clean Energy
                          </a>
                          <a class="nav-link" href="#">
                            Mobility
                          </a>
                          <a class="nav-link" href="#">
                            Ekakshar
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>


  
    </section>
  );
};

export default Navbar;
