import React from "react";
import "./TeamUnion.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const TeamUnion = () => {
  return (
    <section>
      <div className="container-fluid team-images">

          
        <div className="row">
          <div className="col-md-3 col-lg-3 col-12 d-flex align-items-center justify-content-center">
           <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                 src="avtaar.jpg"
                 alt="Avatar"
                 style={{ width: "200px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h5>Rubi Prajapati</h5>
                <p>frontend developer</p>
                <span className="middle">
                      <LinkedInIcon />
                    </span>

              </div>
            </div>
          </div>
          </div>
          <div className="col-md-3 col-lg-3 col-12 d-flex align-items-center justify-content-center">
           <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                 src="avtaar.jpg"
                 alt="Avatar"
                 style={{ width: "200px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1></h1>
                <p>frontend developer</p>
                <span className="middle">
                      <LinkedInIcon />
                    </span>

              </div>
            </div>
          </div>
          </div>
          <div className="col-md-3 col-lg-3 col-12 d-flex align-items-center justify-content-center">
           <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                 src="avtaar.jpg"
                 alt="Avatar"
                 style={{ width: "200px", height: "300px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1></h1>
                <p>frontend developer</p>
                <span className="middle">
                      <LinkedInIcon />
                    </span>

              </div>
            </div>
          </div>
          </div>
          <div className="col-md-3 col-lg-3 col-12">
           <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="avtaar.jpg"
                  alt="Avatar"
                  style={{ width: "200px", height: "300px" }}
                />
                
              </div>
              <div class="flip-card-back">
                <h1></h1>
                <p>frontend developer</p>
                <span className="middle">
                      <LinkedInIcon />
                    </span>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamUnion;
