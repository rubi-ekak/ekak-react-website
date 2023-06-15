import React from "react";
import "./Frontsection.css";
import { Icon } from "@iconify/react";

const Frontsection = () => {
  return (
    <section className="main-padding ">
      {/* <div className="text-start text-center">
        <p className="front-head " style={{ "word-spacing": "0.2em" }}>
          We are
          <span className="front-style-text border rounded-pill ">
            Ekakshar
          </span>
        </p>
      </div> */}
      <div className="row front-image-box front-container">
        <div className="col-md-8  p-2 animate__fadeInUp animate__animated animate__delay-1s">
          <div className="image-oval mr-4">
        
          </div>
          
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-between ">
          <div>

          {/* for showing front animating-text */}
            <div class="animate-container">
              <h1 class=" heading-text">
                <span>Hi, nice</span>
                <span>to see</span>
                <span>you here</span>
              </h1>

              
            </div>
            <span class="usechrome">Ekakshar product development services</span>
            {/* <p className="para-family">
            Ekakshar is our flagship product development service that specializes in 
sustainable design practices. It is built on our vision of accessibility through 
innovation where we help our clients build innovative products and solutions. We 
help our clients create innovative products that are environmentally friendly, 
socially responsible, and economically viable. We offer a range of services that 
cover the entire product journey, from problem identification to delivering 
solutions.
            </p> */}
          </div>
          {/* <div>
            <button type="button" class="btn btn-secondary rounded-pill">
              watch video
            </button>
            <button type="button" class="btn btn-secondary rounded-pill">
              <Icon icon="bx:play" width={"1.3rem"} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Frontsection;
