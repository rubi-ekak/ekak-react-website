import React from "react";
import "./Chief.css";
import { Icon } from "@iconify/react";

const Chief = () => {
  return (
    <section className="main-padding">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col animate__delay-7s animate__fadeInLeft animate__animated">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  <h2 className="content-heading">
                    Jeff Thornow <span className="chief-txt">CFO</span>
                  </h2>
                  <p className="text-start formula-text para-family">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus ducimus ullam harum sit exercitationem earum, tenetur
                    sequi quas!
                  </p>
                </div>
                <div className="button-margin">

                <button
                    type="button"
                    class="btn btn-outline-color rounded-pill w-25 animate__animated animate__bounce"
                  >
                    <a href="https://ekak.in/" className='text-decoration-none text-dark'>more about</a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
                  
                  {/* <button
                    type="button"
                    class="btn btn-outline-color rounded-pill"
                  >
                    <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} />
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-color rounded-pill"
                  >
                    <Icon icon="bx:chevron-up" rotate={1} width={"1.3rem"} />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end animate__delay-7s animate__animated animate__fadeInRight">
            <div class="text-center">
              <img
                src="/pexels-sumit-kapoor.jpg"
                alt="image"
                className="rounded-2"
              />
              {/* <h2>Service Formula</h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ducimus ullam harum sit exercitationem earum, tenetur sequi
                  quas!
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chief;
