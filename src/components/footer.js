import React from 'react';
import Grid from '@mui/material/Grid2';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowIcon from '@mui/icons-material/ArrowRight';
import HeartIcon from '@mui/icons-material/Favorite';

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
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} className="no-gutters">
          <div className="contact-info">
            <div className="navbar-brand" onClick={() => navigate('/')}>
              {/* <img src={logo} className="logo" alt="RBlunt" /> */}
              <p>Good Fellow Books</p>
            </div>
            <p className="para">
              We are Good Fellow Books. We have been serving since 2021 and we're passionate about making education accessible to everyone, regardless of their circumstances. We're committed to providing educational books to everyone because knowledge knows no limits.
            </p>
            <div className="social-info">
              {/* <a
                href="https://www.facebook.com/goodfellowbooks/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {' '}
                <FacebookIcon className="social-media-icon fb-icon" />
              </a>
              <a
                href="https://www.instagram.com/goodfellowbooks/"
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
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} className="no-gutters">
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
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 4 }} className="no-gutters">
          <div className="about footer-item">
            <h5 className="widget-title">About</h5>
            <span>
              Good fellow books was established to make a difference in the lives of children and young adults around the world. We believe that education is the key to breaking the cycle of poverty and empowering individuals to reach their full potential.             </span>
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
              2021 All rights reserved to GoodFellowBooks | This template is made with{' '}
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
