import React, { useState } from "react";
import "./Carousal.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Carousal = () => {
   const [images,setImages]=useState("https://ekak.in/assets/images/banner1.jpg");

   const mousehovering1=()=>{
       setImages("https://ekak.in/assets/images/banner1.jpg")
   }
   const mousehovering2=()=>{
    setImages("https://ekak.in/assets/images/banner-3.png")
}
const mousehovering3=()=>{
    setImages("https://ekak.in/assets/images/partners-fotolia_61152717_subscription_monthly_xxl.jpg")
}
  return (
    <section>
      <div className="">
          <div className="imgcarousel">
          <img
            src={images}
            alt="images"
            className="img-fluid banner w-100"
          ></img>
          </div>
          
        
        <div className="bgcolor-carousal-text text-light container-fluid">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-sm-6" onMouseOver={mousehovering1}>
              <h1>header</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora molestiae blanditiis minima doloribus obcaecati pariatur
                beatae tempore? Iste qui quidem nesciunt ex, et repellat quo,
                labore deleniti unde obcaecati fugit.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6" onMouseOver={mousehovering2}>
              <h1>header</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora molestiae blanditiis minima doloribus obcaecati pariatur
                beatae tempore? Iste qui quidem nesciunt ex, et repellat quo,
                labore deleniti unde obcaecati fugit.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 " onMouseOver={mousehovering3}>
              <h1>header</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora molestiae blanditiis minima doloribus obcaecati pariatur
                beatae tempore? Iste qui quidem nesciunt ex, et repellat quo,
                labore deleniti unde obcaecati fugit.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                <button className="carousal-button btn">
                    button →
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousal;
