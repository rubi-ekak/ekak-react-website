import React from "react";
import "./TeamUnion.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TeamUnion = () => {
  return (
    <section className="team">
      <div className="container-fluid team-images">
        <div className="row">
          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="member1.jfif"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6> Shashank Mishra</h6>
                  <p>Founder & CEO</p>
                </div>
               
                <div class="flip-card-back text-center p-4 ">
                  <h5>Shashank Mishra</h5>
                  <p>Founder & CEO</p>

                  <span className="middle">
                <a href="https://www.linkedin.com/in/shashankmisra1/" target="_blank"> <LinkedInIcon /></a>
                   
                  </span>
                  
                </div>
                
              
            </div>
           
              </div>
          </div>
          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="avtaar.jpg"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6> Abhishek Prakrashi</h6>
                  <p>Chief Technology Advisor</p>
                </div>
                <div class="flip-card-back text-center p-4">
                  <h5> Abhishek Prakrashi</h5>
                  <p>Chief Technology Officer</p>
                  <span className="middle">
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="avtaar.jpg"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6>Rubi Prajapati</h6>
                  <p>Front End Developer</p>
                </div>
                <div class="flip-card-back text-center p-4">
                  <h5>Rubi Prajapati</h5>
                  <p>Front End Developer</p>
                  <span className="middle">
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="avtaar.jpg"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6>Mohd. Numan</h6>
                  <p>Front End Developer</p>
                </div>
                <div class="flip-card-back text-center p-4">
                  <h5>Mohd. Numan</h5>
                  <p>Front End Developer</p>
                  <span className="middle">
                <a href="https://in.linkedin.com/in/one-numan?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank"> <LinkedInIcon /></a>
                   
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="avtaar.jpg"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6>Rishi Kumar Sharma</h6>
                  <p>Product Engineer</p>
                </div>
                <div class="flip-card-back text-center p-4">
                  <h5> Rishi Kumar Sharma</h5>
                  <p>Product Engineer</p>
                  <span className="middle">
                  <a href="https://www.linkedin.com/in/rishi-sharma-371527267" target="_blank"> <LinkedInIcon /></a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 col-12 d-flex align-items-center justify-content-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="avtaar.jpg"
                    alt="Avatar"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <h6>Unknown</h6>
                  <p>Front End Developer</p>
                </div>
                <div class="flip-card-back text-center p-4">
                  <h1>Unknown </h1>
                  <p>Front End Developer</p>
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
