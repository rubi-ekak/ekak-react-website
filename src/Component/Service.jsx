import React from "react";
import "./Service.css";
import { Icon } from "@iconify/react";
import Industrychart from "./Industrychart";

const Service = () => {
  return (
    <section className="main-padding">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  <h2 className="content-heading">Service Formula</h2>
                  <p className="text-start formula-text para-family">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus ducimus ullam harum sit exercitationem earum, tenetur
                    sequi quas!
                  </p>
                </div>
                <div className="mt-4">
                  <button type="button" class="btn btn-outline-color rounded-pill">
                    <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} />
                  </button>
                  <button type="button" class="btn btn-outline-color rounded-pill">
                    <Icon icon="bx:chevron-up" rotate={1} width={"1.3rem"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end">
            <div class="p-3 border rounded-2  text-center">
                 <Industrychart/>
                
              
            </div>
          </div>
        </div>
      </div>
     
      {/* <div className="container-fluid service-box-padding"> */}
      {/* <div className="row gx-5">
          <div className="col-md-3 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column justify-content-between">
              <div className="">
                <h2>Service Formula</h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ducimus ullam harum sit exercitationem earum, tenetur sequi
                  quas!
                </p>
              </div>
              <div className="">
                <button type="button" class="btn btn-secondary rounded-pill">
                  <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} />
                </button>
                <button type="button" class="btn btn-secondary rounded-pill">
                  <Icon icon="bx:chevron-up" rotate={1} width={"1.3rem"} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="border text-end">hello</div>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Service;
