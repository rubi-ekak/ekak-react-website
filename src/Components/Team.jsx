import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <section>
      <div className="team-header-section">
          
        <div className="team-header">
          <h3>team header</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            libero molestiae vero doloribus accusantium. Error, obcaecati
            molestias architecto voluptate magnam saepe ducimus laudantium dicta
            optio doloremque. Voluptates ut consectetur doloribus?
          </p>
        </div>

        <div className="team-images">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-12">
              <img src="young.avif" alt="team-images"></img>
              <div className="d-flex align-items-center justify-content-center flex-column mt-4">
                <h5>Name</h5>
                <h6>Position</h6>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-12 ">
              <img src="young.avif" alt="team-images"></img>
              <div className="d-flex align-items-center justify-content-center flex-column mt-4" >
                <h5>Name</h5>
                <h6>Position</h6>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-12">
              <img src="young.avif" alt="team-images"></img>
              <div className="d-flex align-items-center justify-content-center flex-column mt-4">
                <h5>Name</h5>
                <h6>Position</h6>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-12">
              <img src="young.avif" alt="team-images"></img>
              <div className="d-flex align-items-center justify-content-center flex-column mt-4">
                <h5>Name</h5>
                <h6>Position</h6>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center">sliderfunction</h1>
      </div>
    </section>
  );
};

export default Team;
