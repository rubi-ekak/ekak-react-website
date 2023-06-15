import React from "react";
import "./Card1.css";
// import EastIcon from "@mui/icons-material/East";

const Card1 = () => {
  return (
    <section id="sector" >
      <div className=" main-container" >
        <div className="newshort-container">
          <div className="short-img">
            <div className="short-img-bg"></div>
          </div>
          <div className="short-content">
            <div className="short-information ">
              <div
                className="data-heading d-flex
               align-items-center p-2"
              >
                {/* <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAABCAYAAADtqZEsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB7cABEQAAAMFA+idYWno4byC6CQUCFQLMlT9OeAAAAABJRU5ErkJggg=="
                  alt="line-images"
                  className="line"
                ></img> */}
                {/* <h2 className="short-head">Approach</h2> */}
              </div>
              <p className="short-content-para">
              We believe in collaborative innovation strategy and human centric design. We 
work closely with you throughout the product journey, from problem 
identification to delivering solutions. We also involve your users, customers, 
suppliers, and other stakeholders in the co-creation process, to ensure that your 
products are relevant, desirable, and impactful.
If you are looking for a partner who can help you create products that make a 
positive difference in the world, contact us today. We would love to hear from you
and discuss how we can work together.
              </p>
              <div className="information-text-btn d-flex justify-content-end">
                {/* <button className="show-information d-flex justify-content-between">
                  <span> Show to More</span>
                  <span className="arr-short">
                    <EastIcon />
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card1;
