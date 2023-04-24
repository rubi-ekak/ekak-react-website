import React, { useState } from "react";
import "./Map.css";
import { useRef } from "react";
import useAnalytics from "../UseAnalytics";
import emailjs from "@emailjs/browser";

const Map = () => {
  const form = useRef();
  const gaEventTracker = useAnalytics("contact us");
  const [formState, setFormstate] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    setFormstate({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.sendForm(
        "service_l5idhq9",
        "template_8ju6rno",
        form.current,
        "HgQ2Ctj2J3puZ2dEE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className=" googlecontainer">
        <div className="text-center">
          <h1 id="contact" className="pt-4">
            Contact us
          </h1>
        </div>
        <div className="row p-4">
          <div className="map-data col-md-6 col-lg-6 col-12 ">
            <div className="mapdata">
              {/* <h1 className="mb-4 ekak">Ekak Innovations</h1> */}
              {/* <div className="d-flex mb-4">
                <button className="buttn1">Call</button>
                <button className="buttn2">Email</button>
              </div> */}

              <h3 className="ekak-head">Our Address</h3>
              <h5 className="address-text">
                113/216-A Swaroop Nagar, Kanpur- 208002,
                <br></br> Uttar Pradesh, India
                <br></br> Landline- 0512-4028469
              </h5>
              <div className="d-flex mb-4">
                <button
                  className="buttn1"
                  onClick={() => gaEventTracker("call")}
                >
                  Call
                </button>
                <button
                  className="buttn2"
                  onClick={() => gaEventTracker("email")}
                >
                  Email
                </button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313863.537723742!2d71.87732079999998!3d26.480782200000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c392da08baac5%3A0xe017ff6ddee72c2c!2sEkak%20Innovations!5e0!3m2!1sen!2sin!4v1678448419008!5m2!1sen!2sin"
                width="100%"
                height="250rem"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="map-images col-md-6 col-lg-6 col-12 p-0">
            <div className="form">
              <form onSubmit={handleSubmit} method="POST" ref={form}>
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-12 tell-div ">
                    <label className="label-form">First Name</label>
                    <input
                      name="name"
                      type="text"
                      value={formState.name || ""}
                      className="input-form"
                      placeholder="Enter first name"
                      onChange={handlechange}
                    ></input>
                  </div>
                  <div className="col-md-6 col-lg-6 col-12 tell-div">
                    <label className="label-form">Last Name</label>
                    <input
                      name="last_name"
                      type="text"
                      value={formState.last_name || ""}
                      className="input-form"
                      placeholder="Enter last name"
                      onChange={handlechange}
                    ></input>
                  </div>
                  <div className="col-md-6 col-lg-6 col-12 tell-div">
                    <label className="label-form">Phone Number</label>
                    <input
                      name="phnumber"
                      type="text"
                      value={formState.phnumber || ""}
                      className="input-form"
                      placeholder="Enter phone number"
                      onChange={handlechange}
                    ></input>
                  </div>
                  <div className="col-md-6 col-lg-6 col-12 tell-div">
                    <label className="label-form">Email Address</label>
                    <input
                      name="email"
                      type="text"
                      value={formState.email || ""}
                      className="input-form"
                      placeholder="Enter email address"
                      onChange={handlechange}
                    ></input>
                  </div>
                  <div class="col-12  tell-div">
                    <label className="label-form">
                      Tell us How can we help??
                    </label>
                    <textarea
                      name="message"
                      className="text-area"
                      value={formState.message || ""}
                      type="text"
                      placeholder="Write something.."
                      onChange={handlechange}
                    ></textarea>
                  </div>
                </div>
                <button
                  className="buttn1 btnsubmit"
                  onClick={() => gaEventTracker("form submit button ")}
                >
                  Submit <span className="arrow">➝</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
