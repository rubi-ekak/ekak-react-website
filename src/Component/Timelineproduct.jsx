import React from "react";
import "./Timelineproduct.css";

const Timelineproduct = () => {
  return (
    <div class=" main-padding">
      <h2>How to get started?</h2>
      {/* <h4 class="card-title mb-5 ">How to get started?</h4> */}
      <div class="timeline-product-padding">
        <div class="col-lg-12">
          <div class="animate__animated animate__fadeInUp animate__delay-6s">
            <div class="card-body">
              <div class="hori-timeline" dir="ltr">
                <ul class="list-inline events">
                  <li class="list-inline-item event-list">
                    <div class="px-4">
                      <div class="event-date bg-soft-primary text-primary">
                        step 1
                      </div>
                      <h5 class="font-size-16">Contact us</h5>
                      <p class="text-muted">
                        Fill out the form below or send us an email at
                        ekakshar@ekak.in. Tell us about yourself, your project
                        idea, your budget, and your timeline.
                      </p>
                      <div>
                        <button
                          type="button"
                          class="btn btn-outline-color rounded-pill animate__animated animate__bounce"
                        >
                          <a href="" className="text-decoration-none text-dark">                           
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="list-inline-item event-list">
                    <div class="px-4">
                      <div class="event-date bg-soft-success text-success">
                        step 2
                      </div>
                      <h5 class="font-size-16">Schedule a consultation</h5>
                      <p class="text-muted">
                        We will get back to you within 24 hours to schedule a
                        free consultation with one of our experts.During this session, we will discuss.
                      </p>
                      <div>
                      <button
                          type="button"
                          class="btn btn-outline-color rounded-pill animate__animated animate__bounce"
                        >
                          <a href="" className="text-decoration-none text-dark">                         
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="list-inline-item event-list">
                    <div class="px-4">
                      <div class="event-date bg-soft-danger text-danger">
                        step 3
                      </div>
                      <h5 class="font-size-16">Sign a contract</h5>
                      <p class="text-muted">
                        If you are happy with our proposal, we will send you a
                        contract that outlines the scope of work, deliverables,
                        milestones, payment terms, and other details.
                      </p>
                      <div>
                      <button
                          type="button"
                          class="btn btn-outline-color rounded-pill animate__animated animate__bounce"
                        >
                          <a href="" className="text-decoration-none text-dark">
                            
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="list-inline-item event-list">
                    <div class="px-4">
                      <div class="event-date bg-soft-warning text-warning">
                        step 4
                      </div>
                      <h5 class="font-size-16">Start working together</h5>
                      <p class="text-muted">
                        Once you sign the contract and make the first payment
                        installment (if applicable), we will start working on
                        your project right away.
                      </p>
                      <div>
                      <button
                          type="button"
                          class="btn btn-outline-color rounded-pill animate__animated animate__bounce"
                        >
                          <a href="" className="text-decoration-none text-dark">
                            
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="list-inline-item event-list">
                    <div class="px-4">
                      <div class="event-date bg-soft-warning text-warning">
                        step 5
                      </div>
                      <h5 class="font-size-16">Enjoy the results</h5>
                      <p class="text-muted">
                        We will deliver your project on time and on budget. You
                        will receive the final product, along with the
                        documentation, source files, and support
                      </p>
                      <div>
                      <button
                          type="button"
                          class="btn btn-outline-color rounded-pill animate__animated animate__bounce"
                        >
                          <a href="" className="text-decoration-none text-dark">
                            
                            Read more
                          </a>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelineproduct;
