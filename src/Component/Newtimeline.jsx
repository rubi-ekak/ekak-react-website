import React from "react";
import "./Newtimeline.css";
import { Icon } from '@iconify/react';

const Newtimeline = () => {
  return (
    <div className="">
      <div class="timeline">
        <div class="timeline__event timeline__event--type1 animate__animated animate__delay-1s  animate__fadeInUp">
          <div class="timeline__event__icon">
           <Icon icon="icon-park-outline:thinking-problem" className="ico"  />
           {/* <i class="fa-thin fa-brain-arrow-curved-right"></i> */}
            <div class="timeline__event__date problem-image">
                <img src="/EkaksharImages/Problem Identification.jpg" className="w-100%" style={{height:"8rem",width:"8rem"}}></img>
            </div>
          </div>
          <div class="timeline__event__content ">
            <div class="timeline__event__title">Problem identification</div>
            <div class="timeline__event__description">
              <p>
                We use a design thinking approach to understand the needs and
                desires of your target users, and to define the problem that
                your product aims to solve. We also conduct market research and
                competitive analysis to identify the opportunities and
                challenges in your industry
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event   timeline__event--type2 animate__animated animate__delay-2s  animate__fadeInUp">
          <div class="timeline__event__icon">
          <Icon icon="academicons:ideas-repec" className="ico" />
            <div class="timeline__event__date">
            <img src="/EkaksharImages/Brainstorming Ideas.jpg" className="w-100%" style={{height:"10rem",width:"12rem"}}></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Brainstorming ideas</div>
            <div class="timeline__event__description">
              <p>
                We use collaborative design methods to generate creative
                solutions that meet the needs and desires of your users. We
                apply the principles of circular economy, biomimicry, and
                cradle-to-cradle design to minimize the environmental impact of
                your products. We also involve your users, customers, suppliers,
                and other stakeholders in the co-creation process, to ensure
                that your ideas are relevant, desirable, and impactful.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event  timeline__event--type3 animate__animated animate__delay-3s  animate__fadeInUp">
          <div class="timeline__event__icon">
          <Icon icon="grommet-icons:iteration" className="ico"/>
            <div class="timeline__event__date">
            <img src="/EkaksharImages/Prototype Iterations.jpg" className="w-100%" style={{height:"10rem",width:"12rem"}}></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Prototype iterations</div>
            <div class="timeline__event__description">
              <p>
                We use rapid prototyping and 3D printing technologies to create
                physical models and prototypes of your products. We can also
                help you test and validate your prototypes with real users and
                stakeholders. We use sustainable materials and processes for our
                prototyping and 3D printing services, such as biodegradable
                plastics and recyclable material.
              </p>
            </div>
          </div>
        </div>
        <div class="timeline__event  timeline__event--type1 animate__animated animate__delay-4s  animate__fadeInUp">
          <div class="timeline__event__icon">
          <Icon icon="carbon:development" className="ico"/>
            <div class="timeline__event__date">
            <img src="/EkaksharImages/RealWorldDevelopment.jpg" className="w-100%" style={{height:"10rem",width:"12rem"}}></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Real world development</div>
            <div class="timeline__event__description">
              <p>
                We use advanced tools and methods to evaluate the performance,
                durability, and safety of your products. We also conduct life
                cycle assessment (LCA) and carbon footprint analysis to quantify
                the environmental benefits of your products. We help you track
                and reduce your carbon emissions throughout the product life
                cycle, from raw materials to end-of- life disposal. We also help
                you optimize your supply chain and logistics, using digital
                transformation technologies such as cloud computing, blockchain,
                and artificial intelligence.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline__event  timeline__event--type1 animate__animated  animate__fadeInUp animate__delay-5s">
          <div class="timeline__event__icon">
          <Icon icon="icon-park-outline:delivery" className="ico"/>
            <div class="timeline__event__date">
            <img src="/EkaksharImages/Delivering Solutions.jpg" className="w-100%" style={{height:"10rem",width:"12rem"}}></img>
            </div>
          </div>
          <div class="timeline__event__content">
            <div class="timeline__event__title">Delivering solutions</div>
            <div class="timeline__event__description">
              <p>
              We can help you scale up your production and deliver 
your products to the market. We partner with local manufacturers who use 
sustainable materials and processes, and who can provide flexible and 
customized services. We also offer Manufacturing-as-a-Service (MaaS), which 
allows you to access our network of manufacturers on demand, without investing
in fixed assets or inventory
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newtimeline;
