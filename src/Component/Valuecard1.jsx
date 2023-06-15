import React from "react";

const Valuecard1 = () => {
  return (
    <section className="p-2">
      <p className="fs-6 m-0 text-start">Integrity</p>

      <div className="row" style={{ height: "25rem" }}>
        <h2 className="text-start mt-4 content-heading">
          Dealing honestly and ethically with our customers,associates,owners
          and suppliers
        </h2>
        <div className="col align-items-end d-flex">
          {/* <Valuesicon {...theme}/> */}

          <div>
            <div className="d-flex">
              <span class="circylestyle bg-secondary  border"></span>
              <span class="circylestyle  border"></span>
            </div>
            <div className="d-flex">
              <span class="circylestyle border"></span>
              <span class="circylestyle border"></span>
            </div>
          </div>
        </div>
        <div className="col align-items-end d-flex justify-content-end">
          <p class="text-end">001</p>
        </div>
      </div>
    </section>
  );
};

export default Valuecard1;
