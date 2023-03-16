import React from "react";
import "./Cards2.css";

const Cards2 = () => {
  return (
    <section>
      <div className="container-fluid card2">
        
        <div className="row ">
          <div className="col-md-6 col-lg-6 col-12 d-flex align-items-center justify-content-center card2-box1">
            <div className="card2-text">
              <h1>Card2 section</h1>
              <p className="card2-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolores recusandae error rem libero vel. Maiores,
                eius, alias autem earum facilis praesentium quas debitis
                obcaecati, molestias est sit culpa quaerat!
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12  card2-box2">
            <img
              src="https://bauminform.ru/static/media/cube2.6045face.png"
              alt="images"
              className="img-fluid card2images"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards2;
