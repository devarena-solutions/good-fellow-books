import React from "react";

import { withRouter } from "../hooks/withRouter";

import HomeAboutUs from "../components/home/aboutUs";
import Facts from "../components/home/facts";

import "../styles/about.scss";
import "../styles/home/home.scss";

const About = () => {
  return (
    <div className="about">
      <HomeAboutUs />

      <Facts />
    </div>

  );
};

export default withRouter(About);
