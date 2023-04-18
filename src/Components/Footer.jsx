import React from "react";
import "./Footer.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const Footer = () => {
  return (
    <section>
      <footer className="footer-container">
        <div>




          
          <div className="footer-content  align-items-center justify-centent-center ">
            <div className="footer-contacts d-flex align-items-center justify-content-evenly pt-4">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://ekak.in/assets/images/Ekak-12.png"
                  className="img-fluid logosmall"
                  alt="ekakimages"
                ></img>
              </div>

              <div className="footer-copyright d-flex  justify-content-center  paracopyright">
                
                 <span><CopyrightOutlinedIcon className="paracopyright1" /></span> 
                <p className="copright-text ">
                All rights reserved 2023
                </p>
              
                
              </div>
              {/* <div className="d-flex align-items-center ">
                <HomeOutlinedIcon className="home" />
                <span className="ml-4">
                  113/216-A Swaroop Nagar, Kanpur- 208002,Uttar Pradesh, India
                </span>
              </div> */}
              {/* <div className="d-flex align-items-center ">
                <CallOutlinedIcon className="home" />
                <span>+91 0512 402 8469</span>{" "}
              </div> */}
              <div className="d-flex align-items-center ">
                <EmailOutlinedIcon className="home" />{" "}
                <span>contact@ekak.in </span>
              </div>
            </div>

            {/* <div className="footer-copyright d-flex  justify-content-center paracopyright">
              <CopyrightOutlinedIcon className="paracopyright1" />{" "}
              <p className="">
                {" "}
                Copyright Ekak Innovations Private Limited 2021
              </p>
            </div> */}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
