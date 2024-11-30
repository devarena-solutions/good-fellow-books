import React from "react";
import Grid from "@mui/material/Grid2";

import "../../styles/home/ourServices.scss";
import { useNavigate } from "react-router-dom";

export default function OurServices() {
  const navigate = useNavigate();
  console.log('navigate ', navigate);

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-banner">
        <div className="title">OUR EXPERTISE</div>
        {/* <span className="decorative-element-right"></span> */}

        <h3>Why Choose Enhansafe</h3>

        <Grid container className="box-icon">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/autonomous-drones/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/automated-drones.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>AUTONOMOUS DRONES</h5>
                <span className="small-content">
                  Enhansafe India Pvt. Ltd. is a leading provider of High Performance Unmanned Arial Vehicle ideal for surveillance, aerial photography, surveying and mapping services at the PAN India level.
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/traffic-safety-systems/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/traffic-system.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>TRAFFIC SAFETY SYSTEM</h5>
                <span className="small-content">
                  The widest range of world-class security and surveillance products showcases our expertise & and industry experience! Innovation & and technology empower us to be today’s industry leaders.
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/search-and-frisking-detection/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/search-detection.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>SEARCH & FRISKING DETECTION</h5>
                <span className="small-content">
                  Search and frisking detection are critical aspects of security, especially in high-risk areas such as airports, government institutions, malls, and public arenas.
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/tactical-rescue-and-breaching-system/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/rescue.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>TACTICAL RESCUE & BREACHING SYSTEM</h5>
                <span className="small-content">
                  Experience the widest range of advanced Tactical Rescue and Breaching Tools that can break into any structure within minimal time!
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/women-empowerment/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/empowerment.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>TRAINING-AWARENESS</h5>
                <span className="small-content">
                  Building a safer workplace environment plays a key role in building the right business environment! Our industry-oriented training goes a long way in imparting the right knowledge to professionals.
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="grid-item"
          >
            <div
              className="data-container"
              onClick={() =>
                navigate(`/services/law-enforcement-system/`)
              }
            >
              <div className="icon-decorative">
{/*                 <img src={require("../../assets/images/services/law-enforcement.jpeg")} className="icon"></img>
 */}              </div>
              <div className="text-container">
                <h5>LAW ENFORCEMENT SYSTEM</h5>
                <span className="small-content">
                  Advanced Law enforcement systems that enable Law Enforcement and Rescue officers enhance , automate and manage operations.
                </span>
              </div>
              <button className="btn-grad">Read More</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
