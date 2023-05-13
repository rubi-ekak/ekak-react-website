import React from "react";
import { NavLink } from "react-router-dom";
import "./Carousal1.css";
import useAnalytics from "../UseAnalytics";

const Carousal1 = () => {
  const gaEventTracker=useAnalytics('carousal')
  return (
    <div  id="home">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/Ekak_WebsitePictures/ARGUS_jezael-melgoza-HYQvV8wWX18-unsplash1.jpg"
              className="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment  padding-box">
              <h1 className="heading-top">Argus</h1>
              <p className="para-text mt-4">
                Introducing our cutting-edge factory safety software, featuring
                advanced computer vision technology for real-time monitoring and
                alerts, automated safety checks, and predictive maintenance. Our
                software provides incident analysis and reporting, allowing you
                to investigate accidents and identify potential safety risks.
                With our software, you can proactively address safety concerns,
                reduce downtime, and optimize your manufacturing processes.
                Ensure the safety of your employees and protect your business
                with our comprehensive safety solution.
              </p>
              {/* <button className="bttn button-carousel">
                <a href="https://www.google.com" onClick={()=>gaEventTracker('Argus show more data')}>Show more</a>
              </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/Ekak_WebsitePictures/DAVE_erik-mclean-BRFRCLCsg0k-unsplash3.jpg"
              class="d-block w-100  image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block carousal-show text-allignment padding-box">
              <h1 className="heading-top">DAVE</h1>
              <p className="para-text mt-4">
                Our innovative road safety product leverages machine learning
                technology for real-time tracking and analysis of driver
                behavior. GPS-enabled tracking ensures that you know where your
                drivers are always, while driver distraction and drowsiness
                alerts help prevent accidents before they occur. Lane monitoring
                and tracking capabilities further enhance safety, while driving
                style and behavior assessments enable you to identify areas for
                improvement. With driver performance and safety scores, you can
                monitor progress and incentivize safe driving practices. Trust
                us to help you maintain a safe and responsible fleet of drivers.
              </p>
              {/* <button className="bttn button-carousel">
                <a href="https://www.facebook.com" onClick={()=>gaEventTracker('DAVE show more data')}>Show more</a>
              </button> */}
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/Ekak_WebsitePictures/Ekakshar_gavin-allanwood-Q1NS-nISNIw-unsplash1.jpg"
              className="d-block w-100 image-shadow"
              alt="..."
            />
            <div class="carousel-caption  d-md-block  carousal-show text-allignment padding-box">
              <h1 className="heading-top">3D Printing</h1>
              <p className="para-text mt-4">
                With Ekakshar - our product development service, we believe in a
                customer- centric approach that puts your needs first. Our
                engineering services provide expertise in 3D printing,
                manufacturing, and small-scale manufacturing, with a focus on
                sustainability. We utilize advanced technology such as
                Computational Flow Dynamics and Finite Element Analysis to
                ensure the highest level of precision and efficiency in our
                product development services. Trust us to bring your ideas to
                life with the perfect blend of technology and innovation.
                Contact us today to get started!
              </p>
              {/* <button className="bttn button-carousel">
                <a href="https://www.instagram.com/" onClick={()=>gaEventTracker('3D Printing show more data')}>Show more</a>
              </button> */}
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal1;
