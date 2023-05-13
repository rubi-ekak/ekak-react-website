
import React from "react";
import "./Founder.css";

const Founder = () => {
  return (
    <section >
    <div className="container-fluid card3 p-2" >
      <div className="row  founder-show " >
        <div className="col-md-7 col-lg-7 col-12 d-flex align-items-center justify-content-center card3founder">
          <div className="card2-text" >
            <h1 className="card3-header">Shashank Misra</h1>
            <h5>Founder and Director</h5>
            <p className="card2-para" >
            Shashank is a Serial Entrepreneur, Founder and Director Ekak
           Innovations, that is leading the charge in using AI to create safer
           and more energy-efficient workspaces and factories while improving
          their bottom line. With a Master's degree in Energy Engineering and
            a deep understanding of the challenges facing businesses today,
           Shashank has built a company that develops cutting-edge products
           that optimize workspace safety and energy consumption. Shashank is
           constantly exploring new ways to push the boundaries of innovation
       and make a positive impact on society.
            </p>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-12  card3-founder">
          <img
            src="/Ekak_WebsitePictures/IMG_2413.jpg"
            alt="imges"
            className="img-fluid card2images founderpic"
            // style={{height:"25rem", width:"21rem"}}
          ></img>
        </div>
      </div>
    </div>
  </section>



    
  );
};

export default Founder;
