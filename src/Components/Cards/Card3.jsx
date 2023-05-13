import React from "react";
import "./Card3.css";

const Card3 = () => {
  return (
    <section>
      <div className="container-fluid card3">
        <div className="row  card3-show">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center card3-box1">
            <div className="card2-text">
              <h1 className="card3-header">IT Transformation</h1>
              <p className="card2-para">
                Digital Transformation is a top priority for any business and its supply chain,
                which is why we offer cutting-edge information technology solutions safety that utilize
                machine learning and AI. Our products help prevent hazards in
                factories and warehouses, improve road safety, and enhance
                supply chain tracking and logistics. Whether you're looking for
                a way to prevent accidents and injuries, improve worker
                productivity, or ensure regulatory compliance, we have the
                expertise and technology to help.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12  card3-box3">
            <img
              src="/Ekak_WebsitePictures/ARGUS_arno-senoner-oLS6IxceVNs-unsplash1.jpg"
              alt="images"
              className="img-fluid card2images size-image"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card3;
