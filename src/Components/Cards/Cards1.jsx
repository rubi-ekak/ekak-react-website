import React from "react";
import "./Cards1.css";
import EastIcon from '@mui/icons-material/East';

const Cards1 = () => {
  return (
    <section>
      <div className=" main-container">
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
                ></img>
                <h2 className="short-head">Lorem ipsum, dolor sit </h2>
              </div>
              <p className="short-content-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam rerum ipsum molestias aut possimus doloribus tempore?
                Architecto enim quo alias obcaecati asperiores ipsam rerum?
                Illo, vero! Debitis quisquam voluptatum odio. Nisi impedit ullam
                soluta qui culpa. Rerum odit dolore possimus velit magnam
                distinctio asperiores quas, ipsa ipsam dolores commodi dolorum!
              </p>
              <div className="information-text-btn d-flex justify-content-end">
                <button className="show-information d-flex justify-content-between">
                  <span> Show to More</span>
                  <span className="arr-short"><EastIcon/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards1;
