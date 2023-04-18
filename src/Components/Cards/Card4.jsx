import React from "react";
import "./Cards2.css";

const Card4 = () => {
  return (
    <section>
      <div className="container-fluid card2">
        <div className="row ">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center card2-box1">
            <div className="card2-text">
              <h1 className="card3-header">3D Printing</h1>
              <p className="card2-para">
                With Ekakshar, we share passion about the possibilities of 3D
                printing and additive manufacturing. Our team of experts can
                help you design, prototype, and manufacture custom parts and
                products using a variety of materials and techniques. Whether
                you need a one-of-a-kind prototype, a small production run, or a
                large-scale manufacturing solution, we can help you achieve your
                goals quickly, efficiently, and cost-effectively.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12  card2-box2">
            <img
              src="/Ekak_WebsitePictures/Ekakshar_minku-kang-aCniNTiIFd8-unsplash1.jpg"
              alt="images"
              className="img-fluid card2images"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card4;
