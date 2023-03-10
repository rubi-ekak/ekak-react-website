import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <section>
      <div className="container-fluid googlecontainer">
        <div className="row">
          <div className="map-data col-md-6 col-lg-6 col-12 ">
            <div className="mapdata ml-4">
              <h1 className="mb-5">Ekak Innovations</h1>
              <div className="d-flex mb-5">
                <button className="buttn1">Call</button>
                <button className="buttn2">Message</button>
              </div>

              <h3>Ekak Address</h3>
              <h5>
                113/216-A Swaroop Nagar, Kanpur- 208002,
                <br></br> Uttar Pradesh, India
              </h5>
            </div>
          </div>
          <div className="map-images col-md-6 col-lg-6 col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313863.537723742!2d71.87732079999998!3d26.480782200000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c392da08baac5%3A0xe017ff6ddee72c2c!2sEkak%20Innovations!5e0!3m2!1sen!2sin!4v1678448419008!5m2!1sen!2sin"
              width="750"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
