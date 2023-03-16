import React, { useState } from "react";
import "./Carousal.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EastIcon from "@mui/icons-material/East";

const Carousal = () => {
  const [images, setImages] = useState(
    "https://ekak.in/assets/images/banner1.jpg"
  );

  const [carousalfilter, setcarousalfilter] = useState("imgcarousel");

  const mousehovering1 = () => {
    setImages("https://ekak.in/assets/images/banner1.jpg");
    setcarousalfilter("imgcarousel-no-filter");
  };
  const mousehovering2 = () => {
    setImages("https://ekak.in/assets/images/banner-3.png");
  };
  const mousehovering3 = () => {
    setImages(
      "https://ekak.in/assets/images/partners-fotolia_61152717_subscription_monthly_xxl.jpg"
    );
  };
  return (
    <section>
      <div className="">
        <div className={carousalfilter}>
          <img
            src={images}
            alt="images"
            className="img-fluid banner w-100 carousal-pic"
          ></img>
        </div>

        <div className="bgcolor-carousal-text text-light container-fluid">
          <div className="p-4">
            <div className="row ">
              <div
                className="col-lg-3 col-md-3 col-sm-6  content-box"
                onMouseOver={mousehovering1}
              >
                <h3>header</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora molestiae blanditiis minima doloribus obcaecati
                  pariatur beatae tempore? Iste qui quidem nesciunt ex, et
                  repellat quo, labore deleniti unde obcaecati fugit.
                </p>
                <div className="overlayer">
                  <div>
                    <h3>header2</h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa perspiciatis porro laboriosam doloribus placeat animi.
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     
                     
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-6 content-box"
                onMouseOver={mousehovering2}
              >
                <h3>header</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora molestiae blanditiis minima doloribus obcaecati
                  pariatur beatae tempore? Iste qui quidem nesciunt ex, et
                  repellat quo, labore deleniti unde obcaecati fugit.
                </p>
                <div className="overlayer">
                  <div>
                    <h3>header2</h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa perspiciatis porro laboriosam doloribus placeat animi.
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     
                     
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-6 content-box"
                onMouseOver={mousehovering3}
              >
                <h3>header</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempora molestiae blanditiis minima doloribus obcaecati
                  pariatur beatae tempore? Iste qui quidem nesciunt ex, et
                  repellat quo, labore deleniti unde obcaecati fugit.
                </p>
                <div className="overlayer">
                  <div>
                    <h3>header2</h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa perspiciatis porro laboriosam doloribus placeat animi.
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     
                     
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                <button className="carousal-button ">
                  button
                  <span className="carousal-btn">
                    <EastIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousal;
