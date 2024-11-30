import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SpeedIcon from "@mui/icons-material/Speed";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import Grid from "@mui/material/Grid2";

import "../../styles/home/aboutUs.scss";

export default function HomeAboutUs() {
  return (
    <div className="about-us">
      <div className="decorative-element-left">
        <h2>About Us</h2>
        <span className="decorative-element-right"></span>
      </div>
      <h3>Security Company You Can Trust</h3>
      <span>Our Company is a proven full-service security consulting firm</span>
      <p>
        We at Enhansafe India Pvt Ltd, help enhance Safety and Security with
        design of Surveillance systems that help in mitigating Crime and Loss
        through Risk management. Our expertise helps with protecting assets of
        your organization with essential systems such vulnerability analysis
        exposing the critical gaps in the security and physical protection
        systems.
      </p>

      <Grid container justify="center" className="box-icon">
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
          <div className="icon-decorative">
            <EmojiObjectsIcon className="icon" />
          </div>
          <div className="text-container">
            <h5>Professionalism</h5>
            <h6>
              Our team of security officers are fully trained and have a wealth
              of knowledge and experience to always keep you safe.
            </h6>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
          <div className="icon-decorative">
            <SpeedIcon className="icon" />
          </div>
          <div className="text-container">
            <h5>GREAT CUSTOMER SERVICE</h5>
            <h6>
              Our team is available 24/7. Any queries and problems are handled
              professionally and in a timely manner for your convenience.
            </h6>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
          <div className="icon-decorative">
            <AllInclusiveOutlinedIcon className="icon" />
          </div>
          <div className="text-container">
            <h5>SMART & PRESENTABLE</h5>
            <h6>
              We help create a good first impression for your business. Our
              security officers are friendly, polite, courteous, and helpful.
            </h6>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
