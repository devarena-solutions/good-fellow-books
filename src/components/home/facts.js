import React from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import "../../styles/home/facts.scss";

export default function Facts() {
  const navigate = useNavigate();

  return (
    <div className="facts">
      <div className="overlay">
        <Grid container spacing={2} className="container">
          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className='text-container'>
            <p className="large-text">
              Every child is special and deserves an opportunity to make an impact in changing their lives.
              We are not against the elite class but to make knowledge accessible to every individual irrespective of their religion, location or family conditions. Everything in this country does not favor the general children who do not have parents that are not wealthy or have lost their parents. Every child possesses unique intelligence, waiting to be discovered and nurtured.
            </p>

            <p className="small-text">
              A little help can go a long way in empowering someone in need.

            </p>
            <p className="small-text">
              The best is yet to come! Watch this space for new features and updates.
            </p>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="learn-more-button"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}
