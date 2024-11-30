import React from 'react';
import Grid from '@mui/material/Grid2';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowIcon from '@mui/icons-material/ArrowRight';
import HeartIcon from '@mui/icons-material/Favorite';
import logo from '../assets/logo-enhansafe.jpeg';

import '../styles/footer.scss';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="main-footer-area">
      <Grid
        container
        justifyContent='center'
        spacing={5}
        className="footer-grid-container"
      >
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className="no-gutters">
          <div className="contact-info">
            <div className="navbar-brand" onClick={() => navigate('/')}>
              <img src={logo} className="logo" alt="RBlunt" />
            </div>
            <p className="para">
              We at Enhansafe , intend create the basic awareness of Safety and Security with audited Surveillance systems specifically Crime and Loss Prevention though various technologies such as Video Surveillance, RFID based technology, Biometric and Face recognition technology, Enviromental design, Adaptive Traffic Control systems, Police Security Systems, Search & Frisking equipment and Intelligent Surveillance systems.
            </p>
            <div className="social-info">
              {/* <a
                href="https://www.facebook.com/suneettgl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {' '}
                <FacebookIcon className="social-media-icon fb-icon" />
              </a>
              <a
                href="https://www.instagram.com/Enhansafeinteriors/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {' '}
                <InstagramIcon className="social-media-icon insta-icon" />
              </a> */}
              {/* <div>
                <br />
                <a href="tel://0 (550) 680-34-12" className="phone">
                  {' '}
                  <PhoneInTalkOutlinedIcon className="social-media-icon phone-icon"></PhoneInTalkOutlinedIcon>
                  0 (550) 680-34-12
                </a>
              </div> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className="no-gutters">
          <div className="useful-links footer-item">
            <h5 className="widget-title">Explore</h5>
            <ul>
              <li>
                <ArrowIcon id="icon" />
                <NavLink key={'home'} className={'menu'} to={'/'} exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <ArrowIcon id="icon" />
                <NavLink
                  key={'services'}
                  className={'menu'}
                  to={'/services'}
                  exact={true}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <ArrowIcon id="icon" />
                <NavLink
                  key={'about'}
                  className={'menu'}
                  to={'about'}
                  exact={true}
                >
                  About
                </NavLink>
              </li>
              <li>
                <ArrowIcon id="icon" />
                <NavLink
                  key={'contact'}
                  className={'menu'}
                  to={'contact'}
                  exact={true}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className="no-gutters">
          <div className="useful-links footer-item">
            <h5 className="widget-title">Blogs</h5>
            <ul>
              <li>
                <ArrowIcon id="icon" />
                <NavLink key={'home'} className={'menu'} to={'/blogs/risk-assessment'} exact={true}>
                  Risk Assessment
                </NavLink>
              </li>
              <li>
                <ArrowIcon id="icon" />
                <NavLink
                  key={'services'}
                  className={'menu'}
                  to={'/blogs/physical-security'}
                  exact={true}
                >
                  Physical Security
                </NavLink>
              </li>
              <li>
                <ArrowIcon id="icon" />
                <NavLink
                  key={'about'}
                  className={'menu'}
                  to={'/blogs/planning'}
                  exact={true}
                >
                  Planning & Design
                </NavLink>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} className="no-gutters">
          <div className="about footer-item">
            <h5 className="widget-title">About</h5>
            <span>
            Enhansafe India Pvt Ltd., Founded in 2013, by Sharad Srivastava and Tanushree Srivastava with the vision of “Enhanced Safety and Surveillance. 
            </span>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="no-gutters"
        >
          <div className="copywrite-content">
            <p>
              Copyright ©
              <script
                type="text/javascript"
                async=""
                src="https://www.google-analytics.com/analytics.js"
              ></script>
              <script type="text/javascript">
                document.write(new Date().getFullYear());
              </script>
              2021 All rights reserved to Enhansafe | This template is made with{' '}
              <HeartIcon className="icon" /> by{' '}
              <a
                href="https://www.devarena.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                DevArena Solutions
              </a>
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
