import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container-fluid aboutsection">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <div className="about-padding">
              <h1 className="about-head">Welcome to Ekak</h1>
              <p className="about-para">
               Ekak Innovations is a product development firm
                dedicated to creating innovative solutions for today's most
                pressing challenges. Product development & services centred
                around state-of-the-art technology which is made accessible for
                all sections of society through business model innovations &
                customer-centric approach. We build solutions that have a
                positive impact on the lives of each customer, thereby
                accelerating & bringing sustainability to the mainstream. 
              </p>
              {/* <div className="button-about">
                <div className="buttonredirect">
                  <button className="bttn">buttion1 ➜</button>
                </div>
                <div className="buttonredirect">
                  
                  <button className="bttn">buttion2 ➜</button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center " >
            <img src="/Ekak_WebsitePictures/HowWeWork_jason-goodman-Oalh2MojUuk-unsplash1.jpg" alt="imges" className="img-fluid card2images"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
