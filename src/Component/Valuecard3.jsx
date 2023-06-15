import React from 'react'

const Valuecard3 = () => {
  return (
    <section className="p-2">
        <p className="fs-4 m-0">flexibility</p>
      <div className="row" style={{ height: "25rem" }}>
        <div className="col align-items-end d-flex">
          {/* <Valuesicon {...theme}/> */}
          <div>
            <div className="d-flex">
              <span class="circylestyle bg-secondary  border"></span>
              <span class="circylestyle bg-secondary border"></span>
            </div>
            <div className="d-flex">
              <span class="circylestyle bg-secondary border"></span>
              <span class="circylestyle border"></span>
            </div>
          </div>
        </div>
        <div className="col align-items-end d-flex justify-content-end">
          <p class="text-end">003</p>
        </div>
      </div>
      
    </section>
  )
}

export default Valuecard3
