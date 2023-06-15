import React from "react";
import "./Aboutcareer.css";

const Aboutcareer = () => {
  return (
    <section className="main-padding">
         <h2>Why us</h2>
      <div class="container-fluid box-padding">
       
        <div class="row gx-5">
          <div class="col">
            
              <div className="d-flex flex-column justify-content-between">
                <div className="w-50">
                  <p className=" formula-text text-right ">
                  We are not just another product development services. We are a team of 
passionate designers, engineers, analysts, and makers who care about the 
planet and the people. We have years of experience in creating sustainable 
products for various industries, such as healthcare, education, energy, 
transportation, agriculture, and more. We have helped our clients achieve their 
goals while reducing their environmental footprint.
                  </p>
                </div>
              </div>
        
          </div>
          <div class="col-6">
            <div className="d-flex justify-content-between">
               <div>
                <p>dynamic environment</p>
               <div className="border  career">B</div>
               </div>
               <div>
                <p>committed teammates</p>
                <div className="border career ml-4">A</div>
               </div>
              
            </div>
          </div>
          <div class="col-6 mt-4">
          <div className="d-flex justify-content-between">
               <div>
                <p>dynamic environment</p>
               <div className="border  career">B</div>
               </div>
               <div>
                <p>committed teammates</p>
                <div className="border career ml-4">A</div>
               </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutcareer;
