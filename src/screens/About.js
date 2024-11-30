import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import React from "react";

import { withRouter } from "../hooks/withRouter";
import "../styles/about.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="about-description">
        <Grid
          container
          justifyContent="center"
          spacing={5}
          className="about-us-container"
        >
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="grid-image">
            <img src={IndianFlagAboutUs} className="story-pic" alt="our story" />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            className="grid-text-container"
          >
            <h1 className="title">ABOUT US</h1>
            <span className="small-content">
              <span className="first-capital-letter">E</span>nhansafe India Pvt Ltd, is a leading provider of security and surveillance systems, having its corporate office in Pune, India.
            </span>
            <span className="small-content">
              <span className="first-capital-letter">W</span>e specialize in Physical Security Audits, Risk Consulting and the design and execution of advanced surveillance systems.
            </span>
            <span className="small-content">
              <span className="first-capital-letter">W</span>e envision our journey path as an opportunity to enhance safety and surveillance standards in India and abroad.
              {/* Enhansafe India Pvt Ltd., Founded in 2013, by Sharad Srivastava and
            Tanushree Srivastava with the vision of
            <span className="tag-line">“Enhanced Safety and Surveillance.</span> */}
            </span>
            <Button
              variant="contained"
              //color="primary"
              type="submit"
              className="learn-more-button"
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </Button>
          </Grid>
        </Grid>
      </div>

      <div className="vision">
        <Grid
          container
          justify="center"
          spacing={5}
          className="vision-container"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-text-container"
          >
            <h1 className="title">OUR VISION</h1>
            <span className="small-content">
              <span className="first-capital-letter">A</span>s India’s leading Enterprise security and surveillance solution provider, we are also a registered member of the Defense Manufacturers of India. Our company has delivered industry-specific security and surveillance solutions for state transportation authorities, police departments, and Defense authorities across the country. Our partnership with Israeli, Korean, and Polish companies allow us to offer a wide range of tech-enabled security solutions.
            </span>

            <p className="tag-line">
              “Our solutions include Video Surveillance, RFID, Adaptive Traffic Control, Intelligent Surveillance, Search & Frisking equipment, and Police Security Systems.”
            </p>

            <p className="small-content">
              <span className="first-capital-letter">E</span>nhansafe India Pvt Ltd plays a crucial role in empowering law enforcement forces with cutting-edge technologies and tactical gear, thereby enhancing their effectiveness, safety, and efficiency in maintaining public order and safety. Here’s a detailed description of how Enhansafe India makes a difference.
            </p>

            <p className="small-content">
              <span className="first-capital-letter">O</span>ur innovative technology and industry expertise have empowered us to become the market leader in crime and loss prevention solutions. Alongside designing strategic security and surveillance systems for different Govt agencies, we also provide customized security and surveillance systems for IT parks, infrastructure companies and premier educational institutions.
            </p>
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-image"
          >
            <img src={visionImage} className="story-pic" alt="our vision" />
          </Grid> */}
        </Grid>
      </div>

      <div className="values">
        <Grid
          container
          justify="center"
          spacing={5}
          className="values-container"
        >
          {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-image"
          >
            <img src={valuesImage} className="story-pic" alt="our values" />
          </Grid> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-text-container"
          >
            <h1 className="title">OUR VISION</h1>
            <span className="small-content">
              <span className="first-capital-letter">A</span>s India’s leading Enterprise security and surveillance solution provider, we are also a registered member of the Defense Manufacturers of India. Our company has delivered industry-specific security and surveillance solutions for state transportation authorities, police departments, and Defense authorities across the country. Our partnership with Israeli, Korean, and Polish companies allow us to offer a wide range of tech-enabled security solutions.
              <p>
                <b>Security Excellence:</b> We are dedicated to upholding the highest standards of security excellence, continuously improving our services to meet evolving threats and challenges.
              </p>

              <p>
                <b>Integrity:</b> We operate with integrity, honesty, and transparency in all aspects of our business. We are committed to building trust with our clients, employees, and stakeholders.
              </p>
              <p>
                <b>Innovation:</b> We embrace innovation and technology to stay ahead of emerging risks and provide our clients with the most effective security solutions available.
              </p>

              <p>
                <b>Customer Focus:</b> Our clients are at the heart of everything we do. We prioritize understanding their needs, delivering exceptional service, and exceeding expectations.
              </p>

              <p>
                <b>Collaboration:</b> We foster a culture of collaboration, teamwork, and respect among our employees, partners, and communities. By working together, we achieve greater success in fulfilling our mission.
              </p>

              <p>
                <b>Accountability:</b> We hold ourselves accountable for our actions and outcomes, taking responsibility for delivering results and continuously striving for excellence.
              </p>

              <p>
                <b>Safety and Privacy:</b> We prioritize the safety and privacy of our clients and their information. We adhere to the highest standards of data protection and confidentiality in all our operations.
              </p>
            </span>
          </Grid>
        </Grid>
      </div>

      <div className="brochure-container">
        <Grid container>
        <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-text-container"
          >
            <img src={drone} alt="drone"  />
          </Grid>

            <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            className="grid-text-container"
          >
            <span className="large-content">"At Enhansafe, We've got your Back"</span>
            {/* <button>Download Brochure</button> */}
          </Grid>
        </Grid>
      </div>
      <Facts />

    </div>

  );
};

export default withRouter(About);
