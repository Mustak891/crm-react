import React from "react";
import "./About.css";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="imgabout">
        <img
          className="aboutimg"
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DafnaGlik/CRM_Minisite/side_by_side_drag.png"
          alt="about"
        />
      </div>
      <div className="abouttext">
        <h1>About us</h1>
        <div className="aboutsubhead">
          Who <b className="aboutwe">We</b> Are
        </div>
        <p>
          Customizable to fit your sales cycle Easily tailor your CRM to work
          for you, without any development help. Edit deal stages, add as many
          columns as you'd like, manage multiple pipelines at once, and more.
          Get an instant overview of each deal With a single click, quickly
          access all the information you need to close deals. View contact
          details, understand deal progress, and what needs to be done next.
          Increase visibility with customizable dashboards Easily build
          dashboards in real time with no development help. Gain insights into
          where deals stand, expected revenue, your team’s performance, and
          more.
        </p>
        <div className="aboutButton">
          <Link to="/register" className="link">
          <Fab
            style={{ width: "150px", padding: "10px", margin: "10px" }}
            variant="extended"
            size="medium"
            color="primary"
            aria-label="add"
          >
            Get Started
          </Fab>
          </Link>
          <Link to="/contact" className="link">
          <Fab
            style={{ width: "150px", padding: "10px", margin: "10px" }}
            variant="extended"
            size="medium"
            aria-label="add"
          >
            Contact Us
          </Fab>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
