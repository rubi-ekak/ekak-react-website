import React from "react";
import "./About.css";

const About = () => {
  return (
    <section>
      <div className="container-fluid aboutsection">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center">
            <div>
            <h1 className="about-head">About section</h1>
            <p className="about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dolores recusandae error rem libero vel. Maiores, eius, alias
              autem earum facilis praesentium quas debitis obcaecati, molestias
              est sit culpa quaerat!
            </p>
            <div className="d-flex align-items-center justify-content-between">
             <button className="bttn">buttion1  ➜</button>
             <button className="bttn">buttion2  ➜</button>
            </div>
            </div>
           
          </div>
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center">
            
            <img src="about1jpg.jpg" alt="imges" className="img-fluid"></img>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;
