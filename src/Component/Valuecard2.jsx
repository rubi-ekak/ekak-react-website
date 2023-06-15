import React from "react";
import "./Valuecard.css";
import Valuesicon from "./Valuesicon";

const Valuecard2 = (theme) => {
  return (
    <section className="p-2">
      <div className="row" style={{ height: "25rem" }}>
        <div className="col">
          {/* <Valuesicon {...theme}/> */}
          <div>
            <div className="d-flex">
              <span class="circylestyle bg-secondary  border"></span>
              <span class="circylestyle bg-secondary border"></span>
            </div>
            <div className="d-flex">
              <span class="circylestyle border"></span>
              <span class="circylestyle border"></span>
            </div>
          </div>
        </div>
        <div className="col">
          <p class="text-end">002</p>
        </div>
      </div>
      <p className="fs-4 m-0">Responsiveness</p>
    </section>
  );
};

export default Valuecard2;
