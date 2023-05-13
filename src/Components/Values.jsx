import React from "react";
import "./Values.css";

const Values = () => {
  return (
    <section className="value-background">
      <div class="container ">
        <div className="text-center values-padding">
          <h1 className="values-head">Company Values</h1>
        </div>
        <div class="row">
          <div class="col-md-3 p-2 pl-4 pr-4 d-flex justify-content-center align-items-center">
            <div className="">
              <div className="integrity d-flex">
                <div className="integrity-value m-3 ml-4">
                  <div className="integrity-circle"></div>
                </div>
                <div className="integrity-value2 m-4 mr-2 d-flex flex-column align-items-center justify-content-between">
                  <div className="integrity-circle1"></div>
                  <div className="integrity-circle"></div>
                </div>
              </div>
              <h5 className="value">Explore</h5>
              <p className="value-para">
                Always be curious to know more, never stop exploring.
              </p>
            </div>
          </div>

          <div class="col-md-3 p-2 pl-4 pr-4 d-flex align-items-center justify-content-center">
            <div className="p-4">
              <div className="big-circle big-circle1 flex align-items-center m-2">
                <marquee behavior="slide">
                  <div className="small-circle1"></div>
                </marquee>
              </div>
              <div className="big-circle2 big-circle flex align-items-center m-2">
                <marquee behavior="alternate" direction="right">
                  <div className="small-circle2"></div>
                </marquee>
              </div>
              <div className="big-circle3 big-circle  flex align-items-center m-2">
                <marquee behavior="slide">
                  <div className="small-circle3"></div>
                </marquee>
              </div>
              <h5 className="value">Explore</h5>
              <p className="value-para">
                Always be curious to know more, never stop exploring.
              </p>
            </div>
          </div>

          <div class="col-md-3 p-2 pl-4 pr-4 pt-4 ">
            <div className="create d-flex align-items-center justify-content-center p-2">
              <div className="create-value ">
                <div className="create-circle"></div>
              </div>
              <div className="create-circle1"></div>
            </div>
            <div className="text-create">
              <h5 className="value">Create Impact</h5>
              <p className="value-para">
                Small gestures can create big impact. Create where it matters.
              </p>
            </div>
          </div>

          <div class="col-md-3 p-2 pl-4 pr-4 pt-4 ">
            <div className="team mb-2 d-flex align-items-center justify-content-center">
              <div className="team-value m-4 ml-4 d-flex align-items-start pt-2">
                <div className="team-circle"></div>
              </div>
              <div className="team-value2 m-4 mr-2 d-flex flex-column align-items-center justify-content-end">
                <div className="team-circle1"></div>
              </div>
              <div className="team-value3 m-4 mr-2 d-flex flex-column align-items-center justify-content-between">
                <div className="team-circle2"></div>
              </div>
              <div className="team-value4 m-4 mr-2 d-flex flex-column align-items-center justify-content-between">
                <div className="team-circle3"></div>
              </div>
            </div>

            {/* <div className="create d-flex align-items-center justify-content-center p-2">
              <div className="create-value ">
                <div className="create-circle"></div>
              </div>
              <div className="create-circle1"></div>
            </div> */}
            <div className="text-create">
              <h5 className="value">Create Impact</h5>
              <p className="value-para">
                Small gestures can create big impact. Create where it matters.
              </p>
            </div>
          </div>

          {/* <div class="col-md-3 pl-4 pr-4 pt-4">
            <div className="team mb-2 ">
              <div className="team-value m-4 ml-4 d-flex align-items-start pt-2">
                <div className="team-circle"></div>
              </div>
              <div className="team-value2 m-4 mr-2 d-flex flex-column align-items-center justify-content-end">
                <div className="team-circle1"></div>
              </div>
              <div className="team-value3 m-4 mr-2 d-flex flex-column align-items-center justify-content-between">
                <div className="team-circle2"></div>
              </div>
              <div className="team-value4 m-4 mr-2 d-flex flex-column align-items-center justify-content-between">
                <div className="team-circle3"></div>
              </div>
            </div>

            <h5 className="value">Teamwork</h5>
            <p className="value-para">
              Cultivate meaningful work and relationships together.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Values;
