import React, { useRef } from "react";
import Button from '@mui/material/Button';
import HomeAboutUs from "../components/home/aboutUs";
import slider1Img from "../assets/slider-1.webp";

import "../styles/home/home.scss";
import "../styles/about.scss";

import { withRouter } from "../hooks/withRouter";
import { useNavigate } from "react-router-dom";
import Facts from "../components/home/facts";
import Collections from "../components/home/Collections";
import OrderBook from "../components/home/OrderBook";

const Home = () => {
  const navigate = useNavigate();
  const textContainerRef = useRef();

  return (
    <div className="home-page">
      <div className="banner">
         <img src={slider1Img} alt="Banner" />
        {/* <Header /> */}
        <div className="text-container" ref={textContainerRef}>
          <h1>Good Fellow Books</h1>
          <h3>where books meets the right fellow...</h3>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="learn-more-button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>

      <HomeAboutUs />

      <Collections />

      <OrderBook />

      <Facts />

    </div>
  );
}

export default withRouter(Home);