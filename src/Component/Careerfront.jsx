import React from "react";
import "./Careerfront.css";
import { Icon } from "@iconify/react";

const Careerfront = () => {
  return (
    <section className="main-padding career-margin-top">
      <div className="row">
        <div className="col-md-6">
          <div className="career-front">
            <p className="front-career-head">Join our<br></br> <span className="front-style-text border rounded-pill p-2 career-txt btn-secondary rounded-pill">team</span></p>
          </div>
          <div className="about-career w-50">
            <p className="career-tag lh-sm">
              We're always looking for capable<br></br> and commited<br></br> <span className="text-primary">associates</span> to join us.
            </p>
          </div>
          <div className="pt-4">
            <button type="button" class="btn btn-secondary rounded-pill">
              watch video
            </button>
            <button type="button" class="btn btn-secondary rounded-pill">
              <Icon icon="bx:play" width={"1.3rem"} />
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="technicalimage4.jpg" alt="image" className="w-100 rounded-3"></img>
        </div>
      </div>
    </section>
  );
};

export default Careerfront;
