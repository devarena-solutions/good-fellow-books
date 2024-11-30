import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.scss";

const LayoutComponent = (props) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content-wrap">{props.children}</div>
      <Footer />
    </div>
  );
};
export default LayoutComponent;
