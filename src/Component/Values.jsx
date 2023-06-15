import React from "react";
// import Valuecard from "./Valuecard2";
import Valuecard1 from "./Valuecard1";
import Valuecard3 from "./Valuecard3";
import Valuecard4 from "./Valuecard4";
import Valuecard2 from "./Valuecard2";
import "./Values.css"

const Values = () => {
       const theme={
        text:"Responsiveness",
        index:"002",
        fillicon:"circylestyle bg-secondary  border",
        emptyicon:"circylestyle border"

       }

       const theme1={
        text:"Responsibility",
        index:"004",
        icon:""
       }
  return (
    <section className="main-padding">
      
        <div class=" text-center box-padding">
          <div class="row">
            <div class="col border   rounded-4 " style={{maxWidth:"40%"}}>
              <Valuecard1/>
            </div>
            <div class="col border border-color rounded-4" style={{maxWidth:"20%"}}>
              <Valuecard2/>
                {/* <Valuecard {...theme}/> */}
              
            </div>
            <div class="col border border-color rounded-4" style={{maxWidth:"20%"}}>
              <Valuecard3/>
            </div>
            <div class="col border border-color rounded-4" style={{maxWidth:"20%"}}>
              {/* <Valuecard {...theme1}/> */}
              {/* <div class="p-3">Custom column</div> */}
              <Valuecard4/>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default Values;
