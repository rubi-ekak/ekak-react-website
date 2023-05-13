import React, { useState } from "react";
import "./Map.css";
import { useRef } from "react";
import useAnalytics from "../UseAnalytics";
import emailjs from "@emailjs/browser";

const Map = () => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const form = useRef();

  const gaEventTracker = useAnalytics("contact us");
  const [disabled, setDisabled] = useState(false);
  const [subform, SetSubform] = useState(false);
  const [submitStyle, setSubmitStyle] = useState("buttn1 btnsubmit");
  const [inputName, setInputName] = useState("hideinput");
  const [inputlastName, setInputlastName] = useState("hideinput");
  const [inputemail, setInputemail] = useState("hideinput");
  const [inputphNumber, setInputphNumber] = useState("hideinput");
  const [phonevalid, setPhonevalid] = useState(false);
  const [emailvalid, setEmailValid] = useState(false);
  const [error, setError] = useState(false);
  const [formState, setFormstate] = useState({
    name: "",
    email: "",
    message: "",
    phnumber: "",
    last_name: "",
  });

  const handlechange = (e) => {
    setFormstate({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formState.name ||
      !formState.last_name ||
      !formState.phnumber ||
      !formState.email
    ) {
      setError(true);
      // return false;
    }
    
    else if (regex.test(formState.email) === false) {
      console.log();
      console.log("invalid email");
     
      setEmailValid(true);
    } else {
      console.log("form submitted");
      emailjs
        .sendForm(
          "service_6kj0ayi",
          "template_v8ez0gu",
          form.current,
          "UvFS_1Jfn87g68pEB"
        )
        .then(
          (result) => {
            SetSubform(true);

            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setDisabled(true);
      SetSubform(true);
    }
    ;
  };
  const refreshandler = (e) => {
    console.log(disabled);

    gaEventTracker("form refresh button ");

    setInputName("hideinput");
    setInputlastName("hideinput");
    setInputemail("hideinput");
    setInputphNumber("hideinput");
    setFormstate("");
    setDisabled(false);
    console.log(disabled);
    setEmailValid(false);
    SetSubform(false)
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
                      disabled={disabled}
                    ></input>
                    {error && !formState.name && (
                      <span className="Emptyinput"> Please enter name</span>
                    )}
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
                      disabled={disabled}
                    ></input>
                    {error && !formState.last_name && (
                      <span className="Emptyinput">
                        {" "}
                        Please enter last name
                      </span>
                    )}

                    
                  </div>
                  <div className="col-md-6 col-lg-6 col-12 tell-div">
                    <label className="label-form">Phone Number</label>
                    <input
                      name="phnumber"
                      type="number"
                      value={formState.phnumber || ""}
                      className="input-form"
                      placeholder="Enter phone number"
                      onChange={handlechange}
                      disabled={disabled}
                    ></input>
                    {error && !formState.phnumber && (
                      <span className="Emptyinput">
                        {" "}
                        Please enter phone number
                      </span>
                    )}
                    
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
                      disabled={disabled}
                    ></input>
                    {error && !formState.email && (
                      <span className="Emptyinput">
                        Please enter email address
                      </span>
                    )}


                    {emailvalid&&  (
                      <span className="Emptyinput">
                        {" "}
                        Please enter valid email 
                      </span>
                    )}

                   
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
                      disabled={disabled}
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex justify-content-around">
                  <button
                    className={submitStyle}
                    onClick={() => gaEventTracker("form submit button ")}
                    disabled={disabled}
                  >
                    
                    {subform ? "Thankyou" : "submit"}
                    <span className="arrow">➝</span>
                  </button>
                  <button
                    className={submitStyle}
                    onClick={refreshandler}
                    type="reset"
                  >
                    Plese click for refresh
                    <span className="arrow">➝</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
