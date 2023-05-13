import React from "react";
import "./Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import TeamUnion from "./TeamUnion";
import Founder from "./Founder";
import Card3 from "./Cards/Card3";

const Team = () => {
  return (
    <section id="team">
      <div className="team-header-section" >
        {/* <div className="team-header text-center">
          <h1 className="Innovators-headline">About the Founder</h1> */}
          {/* <p className="Innovators-para">
           
          </p> */}
        {/* </div> */}
       
        <Founder/>
        {/* <TeamUnion /> */}
      </div>
    </section>
  );
};

export default Team;
