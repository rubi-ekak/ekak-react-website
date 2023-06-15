import React from "react";
import "./Footer.css";
import {} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <section className="main-padding">
      <div className="">
        <div className="col">
          <div class="row gx-5">
            <div class="col-md-6">
              <div class="p-3 fs-1 fw-400">es1</div>
            </div>

            <div class="col-md-3 text-end text-decoration-none">
              <ul className="text-decoration-none p-3 fs-4 text-start">
                <li>info@ekak.in</li>
                <li className="mt-2">+1(605)338-6868</li>
                {/* <li className="mt-2">
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill"
                  >
                    fb
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill"
                  >
                    tw
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill"
                  >
                    in
                  </button>
                </li> */}
              </ul>
            </div>
            <div class="col-md-3 text-end text-decoration-none">
              <ul className="text-decoration-none p-3 fs-4 text-start">
                <li>customer space</li>
                <li className="mt-2">legal</li>
              </ul>
            </div>
            
          </div>
          <div class="share d-flex align-items-center justify-content-center ">
           
              <span className="">Share</span>
              <nav >
              share
                <a href="#" > 
                <i class="fa-brands fa-twitter"></i>
                
                
                </a>
                <a href="#">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fa fa-github"></i>
                </a>
              </nav>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
