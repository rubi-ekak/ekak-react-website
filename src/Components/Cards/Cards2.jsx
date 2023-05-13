import React from "react";
import "./Cards2.css";

const Cards2 = () => {
  return (
    <section>
      <div className="container-fluid card2">
        <div className="row card-float card2show ">
          <div className="col-md-6 col-lg-6 col-12  card2-display  card2-box1">
            <div className="card2-text">
              <h1 className="card2-header">Renewable Energy</h1>
              <p className="card2-para">
                At Ekak, we believe in the power of renewable energy to
                transform communities and improve lives. That's why we're proud
                to offer a range of solar lamps and solar charging hubs with
                remote monitoring systems. Our products are designed to be
                energy-efficient, durable, and affordable, making them ideal for
                use in a variety of settings, including rural communities,
                emergency response situations, and off-grid locations. With
                remote monitoring, you can easily track performance and manage
                maintenance needs, ensuring optimal operation and reliability.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12  card2-box2">
            <img
              src="/Ekak_WebsitePictures/RenewableEnergy_mariana-proenca-GXiHwHkIdVs-unsplash8.jpg"
              alt="images"
              className="img-fluid card2images "
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards2;
