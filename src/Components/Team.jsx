import React from "react";
import "./Team.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";
import TeamUnion from "./TeamUnion";

const Team = () => {
  return (
    <section>
      <div className="team-header-section">
        <div className="team-header">
          <h3 className="Innovators-headline">Ekak Innovators</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            libero molestiae vero doloribus accusantium. Error, obcaecati
            molestias architecto voluptate magnam saepe ducimus laudantium dicta
            optio doloremque. Voluptates ut consectetur doloribus?
          </p>
        </div>

        <TeamUnion/>

        
      </div>
    </section>
  );
};

export default Team;
