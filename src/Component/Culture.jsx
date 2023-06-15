import React from "react";
import "./Culture.css";

const Culture = () => {
  return (
    <section className="main-padding">
      <h2 className="content-heading">Culture</h2>
      <div class="container-fluid box-padding">
        <div class="row">
          <div class="col-6 p-0 ">
            <img
              src="pexels-sumit-kapoor.jpg "
              alt="image"
              className="rounded-2"
            ></img>
          </div>
          <div class="col-6 d-flex align-content-end justify-content-end">
            <div className="d-flex w-50 flex-column">
              <div className="d-flex ">
                <span>001</span>
                <p className="culture-list para-family">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum beatae maiores autem enim voluptates dolor quibusdam a
                  odio? Atque repellendus natus quae nemo .
                </p>
              </div>
              <div className="d-flex mt-4">
                <span>002</span>
                <p className="culture-list para-family">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum beatae maiores autem enim voluptates dolor quibusdam a
                  odio? Atque repellendus natus quae nemo in, id exercitationem
                  odit est similique non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid box-padding">
        <div className="row">
          <div className="col-md-6 w-50 p-0">
            <span>003</span>
            <p className="pt-2 w-75 para-family">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              illo nam magni harum similique mollitia laborum. Autem, labore
              sequi hic dolorem rerum, praesentium blanditiis perferendis quia
              placeat, aspernatur exercitationem aliquam!
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex"> 
            <div className="career-oval">
                
            </div>
            <div className="border career3div">
               
            </div>
            
             </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
