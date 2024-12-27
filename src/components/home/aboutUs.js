import React from "react";
import Grid from "@mui/material/Grid2";
import about1Img from "../../assets/about1.webp";
import about2Img from "../../assets/about2.jpeg";
import about3Img from "../../assets/about3.jpeg";
import bookStoreIcon from "../../assets/bookstore-icon.png";
import trustedSellerIcon from "../../assets/trustedSeller.png";
import expandStoreIcon from "../../assets/expandStore.png";
import whiteIconBkg from "../../assets/white-icon-background.png";
import arrowRightIcon from "../../assets/arrowRightIcon.png";
import moneyIcon from "../../assets/money.webp";

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
          <p className="about-us-text">About Our Organisation</p>
          <p className="container-title">We Are In A Mission To Spread Knowledge</p>
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
            <img src={about3Img} alt="About Us" />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={5} className="mission-container">
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <div className="title-container">
            <span className="title">Our Mission</span>
            <span className="description">Fueling curiosity and lifelong learning insightful knowledge sharing through a carefully curated selection of books.</span>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} className="mission-content-wrap">
          <img src={bookStoreIcon} loading="lazy" alt="book store Icon" className="mission-icon" />
          <div class="mission-support-title">
            Best Bookstore
          </div>
          <p className="mission-support-description">Books Explore More Your go-to destination for a treasure trove of reading wonders.</p>
          <a href="/contact" className="support-button-link">
            <img src={whiteIconBkg} loading="lazy" alt="Support Button " class="support-button-image-white" style={{ opacity: 0 }} />
            <img src={arrowRightIcon} loading="lazy" alt="Support Button" class="support-button-image" style={{ opacity: 1 }} />
          </a>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} className="mission-content-wrap">
          <img src={trustedSellerIcon} loading="lazy" alt="book store Icon" className="mission-icon" />
          <div class="mission-support-title">
            Trusted Seller
          </div>
          <p className="mission-support-description">Quality Shop with confidence knowing we're your trusted seller for genuine items.</p>
          <a href="/contact" className="support-button-link">
            <img src={whiteIconBkg} loading="lazy" alt="Support Button " class="support-button-image-white" style={{ opacity: 0 }} />
            <img src={arrowRightIcon} loading="lazy" alt="Support Button" class="support-button-image" style={{ opacity: 1 }} />
          </a>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} className="mission-content-wrap">
          <img src={expandStoreIcon} loading="lazy" alt="book store Icon" className="mission-icon" />
          <div class="mission-support-title">
            Expand Store
          </div>
          <p className="mission-support-description">Diversify our products to cater to evolving needs and preferences of our customers.</p>
          <a href="/contact" className="support-button-link">
            <img src={whiteIconBkg} loading="lazy" alt="Support Button " class="support-button-image-white" style={{ opacity: 0 }} />
            <img src={arrowRightIcon} loading="lazy" alt="Support Button" class="support-button-image" style={{ opacity: 1 }} />
          </a>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} className="mission-content-wrap">
          <img src={moneyIcon} loading="lazy" alt="affordable rates Icon" className="mission-icon money-icon" />
          <div class="mission-support-title">
            Affordable Rates
          </div>
          <p className="mission-support-description">Diversify our products to cater to evolving needs and preferences of our customers.</p>
          <a href="/contact" className="support-button-link">
            <img src={whiteIconBkg} loading="lazy" alt="Support Button " class="support-button-image-white" style={{ opacity: 0 }} />
            <img src={arrowRightIcon} loading="lazy" alt="Support Button" class="support-button-image" style={{ opacity: 1 }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
