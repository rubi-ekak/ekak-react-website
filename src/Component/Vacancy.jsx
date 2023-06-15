import React from "react";
import "./Vacancy.css";

const Vacancy = () => {
  return (
    <section className="main-padding">
      <h1>Vacancies</h1>
      <div className="container-fluid box-padding">
        <div className="row">
          <div className="col-4 border text-center rounded-2 p-0">
            <div className="p-4">
              <div className="text-start">
                <h6>Associate</h6>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis sunt enim quaerat accusantium iste, sed assumenda
                  ratione eligendi quasi similique harum neque excepturi a at ab
                  impedit aliquam! Quibusdam, impedit?
                </p>
              </div>
              <div className="vacancy-footer d-flex justify-content-between">
                <p className="fs-4">
                  <span className="chief-txt">from</span> <b>$2300</b>{" "}
                </p>

                <div className="">
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-pill "
                  >
                    more details
                  </button>
                  <button type="button" class="btn btn-primary rounded-pill apply-button">
                    apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border text-center rounded-2 p-0">

          <div className="p-4">
              <div className="text-start">
                <h6>Engineering technician</h6>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis sunt enim quaerat accusantium iste, sed assumenda
                  ratione eligendi quasi similique harum neque excepturi a at ab
                  impedit aliquam! Quibusdam, impedit?
                </p>
              </div>
              <div className="vacancy-footer d-flex justify-content-between">
                <p className="fs-4">
                  <span className="chief-txt">from</span> <b>$2300</b>{" "}
                </p>

                <div className="text-end">
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-pill"
                  >
                    more details
                  </button>
                  <button type="button" class="btn btn-primary rounded-pill apply-button">
                    apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border text-center rounded-2 p-0">
          <div className="p-4">
              <div className="text-start">
                <h6>Manufacturing Engineering</h6>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis sunt enim quaerat accusantium iste, sed assumenda
                  ratione eligendi quasi similique harum neque excepturi a at ab
                  impedit aliquam! Quibusdam, impedit?
                </p>
              </div>
              <div className="vacancy-footer d-flex justify-content-between">
                <p className="fs-4">
                  <span className="chief-txt">from</span> <b>$2300</b>{" "}
                </p>

                <div className="text-end">
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-pill"
                  >
                    more details
                  </button>
                  <button type="button" class="btn btn-primary rounded-pill apply-button">
                    apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;
