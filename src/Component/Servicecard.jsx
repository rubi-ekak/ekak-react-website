import React, { useState } from 'react'
import "./Servicecard.css"
import { Icon } from '@iconify/react';
import content from "./Servicecontent.json"

const Servicecard = (data) => {
     console.log(data)
   
  return (
    <section>
        <div className="row div-border">
                <div className="col service-detail-padding d-flex">
                  <div className="margin-right">{data.index}</div>
                  <div>
                    <img
                      src={data.img}
                      alt="image"
                      style={{ height: "10rem" }}
                    ></img>
                  </div>
                  <div className="margin-left">{data.title}</div>
                </div>
                <div className="col service-detail-padding justify-content-between">
                  <p>
                    {data.content}
                  </p>
                  <button
                    type="button"
                    class="btn btn-secondary rounded-pill mt-4"
                  >
                    leave a request
                  </button>
                  {/* <button
                    type="button"
                    class="btn btn-secondary rounded-pill mt-4" onClick={handlecollapse}
                  >
                    <Icon icon="bx:chevron-up" />
                  </button> */}
                </div>
              </div>
    </section>
  )
}

export default Servicecard
