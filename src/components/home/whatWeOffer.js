import React from "react";
import SecurityIcon from "@mui/icons-material/Security";

import "../../styles/home/whatWeOffer.scss";

export default function whatWeOffer() {
  return (
    <div className="what-we-offer">
      <div className="decorative-element-left">
        What We Offer
        <span className="decorative-element-right"></span>
      </div>
      <h3>Security Services For a Global Clientele</h3>

      <div className="custom-wrapper">
        <div className="wr1">
          <h5 className="font-weight-bold text-uppercase">
            RISK ASSESSMENT & AUDITS
          </h5>
          <p>Solving various labor-related issues</p>
        </div>
        <div className="wr2">
          <h5 className="font-weight-bold text-uppercase">
            ELECTRONIC SECURITY SYSTEMS
          </h5>
          <p>Increasing your level of protection</p>
        </div>
        <div className="wr3">
          <h5 className="font-weight-bold text-uppercase">
            LAW ENFORCEMENT & TACTICAL GEAR
          </h5>
          <p>Qualified security solutions</p>
        </div>
        <div className="icon-decorative">
          <SecurityIcon className="icon" />
        </div>
        <div className="wr4">
          <h5 className="font-weight-bold text-uppercase">
            LOGISTICS SECURITY
          </h5>
          <p>Guiding your company’s security</p>
        </div>
        <div className="wr5">
          <h5 className="font-weight-bold text-uppercase">
            WAREHOUSE SECURITY
          </h5>
          <p>Providing advice on your exposure</p>
        </div>
        <div className="wr6">
          <h5 className="font-weight-bold text-uppercase">
            COVID ESSENTIAL MANAGEMENT & TRAININGS
          </h5>
          <p>Top-notch personal protection</p>
        </div>
      </div>
    </div>
  );
}
