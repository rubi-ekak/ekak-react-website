import React from "react";
import "./Card3.css";

const Card3 = () => {
  return (
    <section>
      <div className="container-fluid card3">
        <div className="row flex-row-reverse">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center card3-box1">
            <div className="card2-text">
              <h1>Card3 section</h1>
              <p className="card2-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolores recusandae error rem libero vel. Maiores,
                eius, alias autem earum facilis praesentium quas debitis
                obcaecati, molestias est sit culpa quaerat!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12  card3-box3">
            <img
              src="about1jpg.jpg"
              alt="imges"
              className="img-fluid card2images"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card3;
