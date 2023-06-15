import React from "react";
import "./Chevronlist.css"
const Chevronlist = () => {
  return (
    <section className="d-flex justify-content-center">
        <div className="d-flex justify-between">
        <div className="border rounded-circle" style={{height:"5rem", width:"5rem"}}></div>
        <div className="border rounded-circle" style={{height:"5rem", width:"5rem"}}></div>
        <div className="border rounded-circle" style={{height:"5rem", width:"5rem"}}></div>
        </div>
      <div
        className="border chevron-box d-flex justify-centent-center align-items-center rounded-pill"
        style={{ height: "300px", width: "900px", borderWidth: "4rem" }}
      >
        
       
          <div class="chevron chevron-padding"> Text here</div>
          <div class="chevron chevron-padding"> Text here</div>
          <div class="chevron chevron-padding"> Text here</div>
          
        
      </div>
    </section>
  );
};

export default Chevronlist;
