import React from "react";
import { useState } from "react";
import "./Aboutservice.css";
import Newtimeline from "./Newtimeline";
import Projectimeline from "./Projectimeline";
import Servicecard from "./Servicecard";
import data from "./Servicedata.json";

const Aboutservice = () => {
  const [toggle, settoggle] = useState(false);

  const handleclick = () => {
    settoggle(!toggle);
  };
  // const handlecollapse = () => {
  //   settoggle(!toggle);
  //   console.log("welcome");
  // };
  console.log(toggle);

  const obj={
    index:"001",
    title:"lean Manufacturing",
    img:"./photo.avif",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Labore aut repudiandae vitae ducimus iure accusamus"
  }

  const obj1={
    index:"002",
    title:"Text engineering",
    img:"./photo.avif",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Labore aut repudiandae vitae ducimus iure accusamus"
  }

  const obj2={
    index:"003",
    title:"Prototype builds",
    img:"./photo.avif",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit Labore aut repudiandae vitae ducimus iure accusamus"
  }
 console.log(obj)
  return (
    <section className="main-padding">
      <h2 className="content-heading">Our Journey</h2>
      {/* <div class="container-fluid box-padding">
        <div class="row gx-5">
        
          <div class="col">
          <h2 className="content-heading">Services</h2>
            <div class="padding-item">
           
              
              
            </div>
        
          </div>
        </div>
        
        

        
         
        <div class="accordion p-4" id="accordionPanelsStayOpenExample">
          <div className="d-flex">
          <div className="accordion-arrow ">01</div>
          <div class="accordion-item w-100">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button  justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Lean Manufacturing
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <Servicecard  {...obj} />
              </div>
            </div>
          </div>
          </div>

          <div className="d-flex">
          <div className="accordion-arrow">02</div>
          <div class="accordion-item w-100">
          
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Text engineering
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <Servicecard {...obj1}/>
              </div>
            </div>
          
          </div>
          </div>

          <div className="d-flex">
          <div className="accordion-arrow">03</div>
          <div class="accordion-item w-100">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Prototype builds #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <Servicecard {...obj2}/>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>


      */}
      <div>
      <Newtimeline/>
      </div>
      
    </section>
  );
};

export default Aboutservice;
