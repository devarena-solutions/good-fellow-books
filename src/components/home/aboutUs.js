import React from "react";
import Grid from "@mui/material/Grid2";
import about1Img from "../../assets/about1.webp";
import about2Img from "../../assets/about2.webp";

import "../../styles/home/aboutUs.scss";

export default function HomeAboutUs() {
  return (
    <div className="about-us">
      <div className="decorative-element-left">
        <h2>About Us</h2>
        <span className="decorative-element-right"></span>
      </div>

      <Grid container spacing={2} className="box-icon">
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='text-container'>
          <p className="about-us-text">About Our Foundation</p>
          <p className="container-title">We Are In A Mission To Help Helpless</p>
          <h6>
            Thank you for visiting our website and showing your interest in our business.
            We are Good Fellow Books. We have been serving since 2021 and we're passionate about making education accessible to everyone, regardless of their circumstances. 
            We're committed to providing educational books to everyone because knowledge knows no limits.
          </h6>
          <h6>
            Good fellow books was established to make a difference in the lives of children and young adults around the world.
            We believe that education is the key to breaking the cycle of poverty and empowering individuals to reach their full potential.
          </h6>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='about-img'>
          <div className="about-front-img">
            <img src={about2Img} alt="About Us" />
          </div>
          <div className="about-back-img">
            <img src={about1Img} alt="About Us" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
