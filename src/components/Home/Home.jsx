import React from "react";
import "./Home.css";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTitle">
        <h1 className="homeheading">
          CRM for every business, for every <br />
          industry
        </h1>
        <p className="homedesc">
          Monday CRM brings the best of general-purpose solutions and vertical
          solutions under one roof. With Canvas,
          <br /> we're empowering you to redesign the user interface of the CRM,
          and create a personalized instance that meets your specific <br />
          requirements and preferences. You can do this without writing a single
          line of code
        </p>
      </div>
      <div className="h-title">
        <div className="h-title-warpper">
          <div className="h-title-item">Analytical CRM systems</div>
          <div className="h-title-item">Operational CRM systems</div>
          <div className="h-title-item">Collaborative CRM systems</div>
          <div className="h-title-item">Strategic CRM systems</div>
          <div className="h-title-item">Drive upsells systems</div>
        </div>
      </div>
      <div className="homeButton">
        <Link to="/contact" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            Get quote
          </Fab>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/service" className="link">
          <Fab
            variant="extended"
            size="small"
            aria-label="add"
            style={{ padding: "15px" }}
          >
            Our services
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default Home;
