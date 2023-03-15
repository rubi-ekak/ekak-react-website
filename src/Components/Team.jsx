import React from "react";
import "./Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import TeamUnion from "./TeamUnion";

const Team = () => {
  return (
    <section>
      <div className="team-header-section">
        <div className="team-header">
          <h3 className="Innovators-headline">Ekak Innovators</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            libero molestiae vero doloribus accusantium. Error, obcaecati
            molestias architecto voluptate magnam saepe ducimus laudantium dicta
            optio doloremque. Voluptates ut consectetur doloribus?
          </p>
        </div>

        <TeamUnion/>

        {/* <div className="team-images">
          <div className="row">
            <div className="col-md-2 col-lg-3 col-12 team flip-card">
              <div className="flip-inner">
                <div className="flip-card-front">
                  <img
                    src="young.avif"
                    alt="team-images"
                    className="team-member-image"
                  ></img>
                </div>

                <div className=" flip-card-back">
                  <a
                    href="https://in.linkedin.com/in/rubi-prajapati-470538238?original_referer=https%3A%2F%2Fwww.google.com%2F"
                    target="_blank"
                  >
                    <span className="middle">
                      <LinkedInIcon />
                    </span>
                  </a>
                  <h5>Rubi Prajapati</h5>
                  <h6>(Frontend Developer)</h6>
                </div>
              </div>
            </div>





            <div className="col-md-2 col-lg-3 col-12 team flip-card">
              <div className="flip-inner">
                <div className="flip-card-front">
                  <img
                    src="young.avif"
                    alt="team-images"
                    className="team-member-image"
                  ></img>
                </div>

                <div className="d-flex align-items-center justify-content-center flex-column flip-card-back">
                  <a
                    href="https://in.linkedin.com/in/rubi-prajapati-470538238?original_referer=https%3A%2F%2Fwww.google.com%2F"
                    target="_blank"
                  >
                    <span className="middle">
                      <LinkedInIcon />
                    </span>
                  </a>
                  <h5>Rubi Prajapati</h5>
                  <h6>(Frontend Developer)</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3 col-12 team flip-card">
              <div className="flip-inner">
                <div className="flip-card-front">
                  <img
                    src="young.avif"
                    alt="team-images"
                    className="team-member-image"
                  ></img>
                </div>

                <div className="d-flex align-items-center justify-content-center flex-column flip-card-back">
                  <a
                    href="https://in.linkedin.com/in/rubi-prajapati-470538238?original_referer=https%3A%2F%2Fwww.google.com%2F"
                    target="_blank"
                  >
                    <span className="middle">
                      <LinkedInIcon />
                    </span>
                  </a>
                  <h5>Rubi Prajapati</h5>
                  <h6>(Frontend Developer)</h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3 col-12 team flip-card">
              <div className="flip-inner">
                <div className="flip-card-front">
                  <img
                    src="young.avif"
                    alt="team-images"
                    className="team-member-image"
                  ></img>
                </div>

                <div className="d-flex align-items-center justify-content-center flex-column flip-card-back">
                  <a
                    href="https://in.linkedin.com/in/rubi-prajapati-470538238?original_referer=https%3A%2F%2Fwww.google.com%2F"
                    target="_blank"
                  >
                    <span className="middle">
                      <LinkedInIcon />
                    </span>
                  </a>
                  <h5>Rubi Prajapati</h5>
                  <h6>(Frontend Developer)</h6>
                </div>
              </div>
            </div>
           
           
            
          </div>
        </div>
        <h1 className="text-center"></h1> */}
      </div>
    </section>
  );
};

export default Team;
