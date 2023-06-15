import React from "react";
import "./Projectimeline.css";
import { Animated } from "react-animated-css";

const Projectimeline = () => {
  return (
    <section>
      <div className="container">
        <div className="padding-container">
          {/* <div className=" timeline-head  mb-4"> */}
          <div className=" mb-4 text-center"> 
              
           
            {/* <h1 className="text-size">Project Timeline</h1> */}
            <h1 className="text-color">
            Project Timeline
            </h1>
          </div>
          {/* <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            > */}
          <div className="container animate__animated animate__fadeIn animate__delay-2s">
            <div class="row gap-4">
              <div
                class="col border rounded-3 justify-content-center align-items-center d-flex"
                style={{ height: "3.2rem" }}
              >
                1 of 2
              </div>
              <div
                class="col border rounded-3 justify-content-center align-items-center d-flex"
                style={{ height: "3.2rem" }}
              >
                2 of 2
              </div>
            </div>
          </div>
          
          <div class="container mt-2">
            {/* <div class="row">
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 1
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center ">
                    Div 2
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 3
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 4
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 5
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 6
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 7
                  </div>
                </div>
              </div>
              <div class="col">
                <div
                  className="border small-div-padding border-top-0 border-bottom-0 border-start-0 border-end-0"
                  style={{ height: "22rem" }}
                >
                  <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center">
                    Div 8
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div class="grid-container">
              <div
                class="item1  border border-top-0 border-bottom-0 px-2 border-start-0"
                style={{ height: "20rem" }}
              >
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item2 border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item3  border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item4  border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item5  border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item6  border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item7  border border-top-0 border-bottom-0 px-2">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
              <div class="item8  border border-top-0 border-bottom-0 px-2 border-end-0">
                <div class="bg-secondary text-white p-2 mb-3 rounded-4 text-center">
                  sun
                </div>
              </div>
            </div> */}
            <div className="grid-box animate__animated animate__fadeIn animate__delay-2s"> 
              <div class="item1  border text-center border-danger border-top-0 border-bottom-0 px-2 border-start-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center ">
                  sun
                </div>
              </div>
              <div class="item2 border text-center border-top-0 border-bottom-0 px-2">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item3  border text-center border-top-0 px-2 border-bottom-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item4  border text-center border-top-0  px-2 border-bottom-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item5  border text-center border-top-0 px-2 border-bottom-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item6  border text-center border-top-0 px-2 border-bottom-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item7 border text-center border-top-0 px-2 border-bottom-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item8  border text-center border-top-0 px-2 border-bottom-0 border-end-0">
                <div class="small-box text-white p-2 mb-3 rounded-3 text-center">
                  sun
                </div>
              </div>
              <div class="item9  border text-center border-top-0 px-2 border-start-0 border-bottom-0 ">
                <div class=" text-white  mb-3 rounded-2 text-center item-span border-top-0 d-flex align-items-center">
                  <div
                    className="inner-line rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item10  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item11  border text-center justify-content-center align-items-center border-top-0 border-bottom-0">
                <div class=" text-white  mb-3 rounded-3 text-center item-span-second border-top-0 d-flex align-items-center">
                  <div
                    className="inner-line2 rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item12  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item13  border text-center item-float  border-top-0 border-bottom-0"></div>
              <div class="item14  border text-center border-top-0 border-bottom-0 px-2">
                <div class=" text-white d-flex align-items-center mb-3 rounded-3 text-center item-span-third border-top-0 ">
                  <div
                    className="inner-line2 rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item15  border text-center  item-float border-top-0 border-bottom-0"></div>
              <div class="item16  border text-center item-float border-top-0 border-bottom-0 border-end-0"></div>
              <div class="item17  border text-center item-float border-start-0 border-top-0 border-bottom-0"></div>
              <div class="item18  border text-center border-top-0 border-bottom-0">
                <div class=" text-white  mb-3 rounded-3 text-center item-span-fouth border-top-0 d-flex align-items-center">
                  <div
                    className="inner-line3 rounded-1 "
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item19  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item20  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item21  border text-center border-top-0 border-bottom-0">
                <div class=" text-white  mb-3 rounded-3 text-center item-span-fifth border-top-0 d-flex align-items-center">
                  <div
                    className="inner-line3 rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item22  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item23  border text-center item-float border-top-0 border-bottom-0"></div>
              <div class="item24  border text-center item-float border-top-0 border-bottom-0 border-end-0"></div>
              <div class="item25  border text-center item-float border-start-0 border-bottom-0  border-top-0"></div>
              <div class="item26 border text-center border-top-0 border-bottom-0  px-2">
                <div class=" text-white d-flex align-items-center mb-3 rounded-3 text-center item-span-six border-top-0">
                  <div
                    className="inner-line4 rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item27 border text-center item-float border-top-0 border-bottom-0">
                27
              </div>
              <div class="item28  border text-center item-float border-top-0 border-bottom-0">
                28
              </div>
              <div class="item29  border text-center border-top-0 border-bottom-0">
                <div class=" text-white d-flex align-items-center mb-3 rounded-3 text-center item-span-seven border-top-0">
                  <div
                    className="inner-line5 rounded-1"
                    style={{ height: "2.5rem", width: "4.5px" }}
                  ></div>
                </div>
              </div>
              <div class="item30  border text-center item-float border-top-0 border-bottom-0">
                30
              </div>
              <div class="item31  border text-center item-float border-top-0 border-bottom-0">
                31
              </div>
              <div class="item32  border text-center item-float border-top-0 border-bottom-0 border-end-0">
                32
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="grid-container">
        <div
          class="item1  border border-top-0 border-bottom-0"
          style={{ height: "20rem" }}
        >
          <div
            class="bg-primary text-white p-3 mb-3 rounded-4 text-center px-4 "
            style={{ height: "4rem", width: "6rem" }}
          ></div>
        </div>
        <div class="item2 bg-secondary border">
          <div class="bg-secondary text-white p-3 mb-3 rounded-4 text-center"></div>
        </div>
        <div class="item3 bg-secondary border">3</div>
        <div class="item4 bg-secondary border">4</div>
        <div class="item5 bg-secondary border">5</div>
        <div class="item6 bg-secondary border">6</div>
        <div class="item7 bg-secondary border">7</div>
        <div class="item8 bg-secondary border">8</div>
      </div> */}


    </section>
  );
};

export default Projectimeline;
