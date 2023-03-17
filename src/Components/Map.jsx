import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section>
      <div className="container-fluid googlecontainer">
        <div className="row">
          <div className="map-data col-md-6 col-lg-6 col-12 ">
            <div className="mapdata">
              <h1 className="mb-4">Ekak Innovations</h1>
              <div className="d-flex mb-4">
                <button className="buttn1">Call</button>
                <button className="buttn2">Message</button>
              </div>

              <h3>Ekak Address</h3>
              <h5 className="address-text">
                113/216-A Swaroop Nagar, Kanpur- 208002,
                <br></br> Uttar Pradesh, India
              </h5>
            </div>
          </div>
          <div className="map-images col-md-6 col-lg-6 col-12 p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313863.537723742!2d71.87732079999998!3d26.480782200000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c392da08baac5%3A0xe017ff6ddee72c2c!2sEkak%20Innovations!5e0!3m2!1sen!2sin!4v1678448419008!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0,backgroundColor:"pink" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-md-6 col-lg-6 col-12 logo-container">
            <img
              src="https://ekak.in/assets/images/Ekak-12.png"
              alt="logo-images"
            ></img>
          </div>
          <div className="col-md-6 col-lg-6 col-12 form-container">
            <div className="queries">
              <h5>Ask company related queries??</h5>
            </div>
            <div className="form">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-12 mt-4 ">
                  <input type="text"
                    className="input-form"
                    placeholder="Enter first name"
                  ></input>
                </div>
                <div className="col-md-6 col-lg-6 col-12 mt-4">
                  <input type="text"
                    className="input-form"
                    placeholder="Enter last name"
                  ></input>
                </div>
                <div className="col-md-6 col-lg-6 col-12 mt-4">
                  <input type="text"
                    className="input-form"
                    type="number"
                    placeholder="Enter phone number"
                  ></input>
                </div>
                <div className="col-md-6 col-lg-6 col-12 mt-4">
                  <input type="text"
                    className="input-form"
                    placeholder="Enter email address"
                  ></input>
                </div>
                <div class="col-12 mt-4 ">
                  <textarea
                  className="text-area"
                    name="subject"
                    type="text"
                    placeholder="Write something.."
                    style={{height:"150px",width:"100%"}}
                  ></textarea>
                </div>
               
              </div>
              <button className="buttn1 btnsubmit">Submit <span className="arrow">➝</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
