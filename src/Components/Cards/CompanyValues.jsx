import React from "react";
import "./CompanyValues.css";

const CompanyValues = () => {
  return (
    <section className="values-container" id="team">
      <div className="">
       
        <div className="values-header values-head">
          <h1 className="text-center about-head">Ekak Values</h1> 
        </div>
        <div className="values-content" >
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-6 box d-flex flex-column justify-content-center align-items-center">
              <img src="IMG_2429-removebg-preview (2).png" className="img-fluid"></img>
              <h2 className="value value-txt">Integrity</h2>
              <p className="value-para">
                Always choose your thoughts & <br></br>actions based on values
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 box d-flex flex-column justify-content-center align-items-center">
              <img src="IMG_2430-removebg-preview (2).png" className="img-fluid "></img>

              <h2 className="value">Explore</h2>
              <p className="value-para">
                Always be curious to know more,<br></br>
                never stop exploring
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 box d-flex flex-column justify-content-center align-items-center">
              <img src="IMG_2428-removebg-preview-removebg-preview.png" className="img-fluid"></img>
              <h2 className="value">Create Impact</h2>
              <p className="value-para">
                Small gestures can have a big<br></br> impact, Create where it
                matters
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-6 box d-flex flex-column justify-content-center align-items-center">
              <img src="IMG_2426-removebg-preview1.png" className="img-fluid"></img>
              <h2 className="value">Team work</h2>
              <p className="value-para">
                Cultivate meaningful work and<br></br> relationships together
              </p>
            </div>
          </div>
        </div >
      </div>
    </section>
  );
};

export default CompanyValues;
