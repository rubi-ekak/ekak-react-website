import React from 'react'
import "./About.css"
import { Icon } from '@iconify/react';

const About = () => {
  return (
    <section className="main-padding">
      <div class="container-fluid box-padding">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <div className="d-flex flex-column justify-content-between animate__animated animate__fadeInLeft">
                <div className="mr-4">
                  <h2 className="content-heading">
                    About 
                  </h2>
                  <p className="text-start formula-text para-family">
                  Ekakshar is our flagship product development service that specializes in 
sustainable design practices. It is built on our vision of accessibility through 
innovation where we help our clients build innovative products and solutions. We 
help our clients create innovative products that are environmentally friendly, 
socially responsible, and economically viable. We offer a range of services that 
cover the entire product journey, from problem identification to delivering 
solutions
                  </p>
                </div>
                <div className="button-margin">
                  <button
                    type="button"
                    class="btn btn-outline-color rounded-pill w-25 animate__animated animate__bounce"
                  >
                    <a href="https://ekak.in/" className='text-decoration-none text-dark'>more about</a>
                    {/* <Icon icon="bx:chevron-up" rotate={3} width={"1.3rem"} /> */}
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end animate__animated animate__fadeInRight">
            <div class="text-center">
              <img
                src="/EkaksharImages/Intro3.1.jpg"
                alt="image"
                className="rounded-2 about-image"
                style={{height:"26rem",width:"38rem"}}
              />
              {/* <h2>Service Formula</h2>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ducimus ullam harum sit exercitationem earum, tenetur sequi
                  quas!
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
