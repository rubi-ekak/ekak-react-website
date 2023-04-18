import React from "react";
import "./Cards1.css";
import EastIcon from "@mui/icons-material/East";

const Cards1 = () => {
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
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAABCAYAAADtqZEsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB7cABEQAAAMFA+idYWno4byC6CQUCFQLMlT9OeAAAAABJRU5ErkJggg=="
                  alt="line-images"
                  className="line"
                ></img>
                <h2 className="short-head">Approach</h2>
              </div>
              <p className="short-content-para">
                Our approach to work is centered around the idea of breaking
                down complex problems into smaller, more manageable subproblems.
                This allows us to address each issue with precision engineering
                and a data-driven, cost-effective approach. We believe in taking
                a customer-centric approach to understanding our clients'
                desires and behaviors, allowing us to create more effective
                experiences, relevant products, and loyal relationships. Our expertise lies in three key
                areas: Renewable Energy, IT Transformation, and 3D Printing.
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

export default Cards1;
