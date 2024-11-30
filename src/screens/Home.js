import React, { useRef } from "react";
import Button from '@mui/material/Button';
import HomeAboutUs from "../components/home/aboutUs";
import OurServices from "../components/home/ourServices";

import "../styles/home/home.scss";
import "../styles/about.scss";

import { withRouter } from "../hooks/withRouter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const textContainerRef = useRef();

  return (
    <div className="home-page">
      <div className="banner">
{/*         <img src={bannerImage} alt="Banner" />
 */}        {/* <Header /> */}
        <div className="text-container" ref={textContainerRef}>
          <h1>Enhansafe</h1>
          <h3>Enhancing Your Safety...</h3>

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

      <OurServices />

    </div>
  );
}

export default withRouter(Home);