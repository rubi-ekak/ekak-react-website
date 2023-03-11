import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <footer className="footer-container">
        <div>
          <div className="footer-links">
            <ul>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">A</span>
                </li>
              </a>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">B</span>
                </li>
              </a>
            </ul>
            <ul>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">A</span>
                </li>
              </a>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">B</span>
                </li>
              </a>
            </ul>
            <ul>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">A</span>
                </li>
              </a>
              <a href="#" target="_blank">
                {" "}
                <li>
                  <span className="textlink">B</span>
                </li>
              </a>
            </ul>
            <ul>
              
                
                <li>
                <button type="button" className="ftrbtn">
                  <span className="textbtn bg-white">A</span>
                  </button>
                </li>
              
             
                
                <li>
                <button type="button" className="ftrbtn">
                  <span className="textbtn bg-white">B</span>
                  </button>
                </li>
            
            </ul>
            <ul>
              
                
                <li>
                <button type="button" className="ftrbtn">
                  <span className="textbtn bg-white">A</span>
                  </button>
                </li>
                </ul>
          </div>

          <div className="footer-content"></div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
