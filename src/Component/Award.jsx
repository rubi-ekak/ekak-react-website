import React from "react";
import "./Award.css";

const Award = () => {
  return (
    <section className="main-padding">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between">
                <div className="mr-4">
                  <h2 className="content-heading">Awards</h2>
                  <p className="text-start formula-text para-family">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis pariatur dolorem placeat laudantium recusandae
                    minus possimus eos accusantium sunt saepe eaque a, quos
                    provident voluptate aliquam magni, sint deserunt aut fuga
                    facilis quod, veritatis iusto molestiae autem?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <div className="oval"></div>
              <div
                className="bg-secondary rounded-3"
                style={{ width: "20rem", height: "16rem",}}
              ></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Award;
