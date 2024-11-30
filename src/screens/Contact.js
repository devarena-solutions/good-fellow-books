import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';

import loadSMTP from "../utils/loadSMTP";

import "../styles/contact.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarStatus, setSnackBarStatus] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarAutoHideDuration, setSnackBarAutoHideDuration] =
    useState(6000);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      loadSMTP("https://smtpjs.com/v3/smtp.js", () => {
        setLoaded(true);
      });
    }
  }, [loaded]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackBar(false);
  };

  const resetForm = () => {
    setName("");
    setContact("");
    setEmail("");
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const messageData =
      "<b>Customer name: </b>" +
      name +
      "<br>" +
      "<b>Customer email: </b>" +
      email +
      "<br>" +
      "<b>Customer number: </b>" +
      contact +
      "<br>" +
      "<b>Message: </b>" +
      message;

    if (loaded) {
      window.Email.send({
        Host: process.env.REACT_APP_EMAIL_HOST,
        Username: process.env.REACT_APP_EMAIL_USERNAME,
        Password: process.env.REACT_APP_EMAIL_PASSWORD,
        To: JSON.parse(process.env.REACT_APP_EMAIL_TO_LIST),
        From: process.env.REACT_APP_EMAIL_FROM,
        Subject: "Enhansafe Website visitor " + name + " needs help!",
        Body: messageData,
      }).then((message) => {
        console.log("message sent successfully!");
      });
      setSnackBarStatus("success");
      setSnackBarAutoHideDuration(10000);
      setSnackBarMessage(
        "You message sent successfully! Our representative will contact you shortly!"
      );
      setShowSnackBar(true);
      resetForm();
    }
  };
  return (
    <div className="contact-us">
      <Snackbar
        open={showSnackBar}
        autoHideDuration={snackBarAutoHideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackBarStatus}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
      <div className="container-img">
{/*         <img className="contactImg" src={Cwsd} alt="contact" />
 */}        <h1 className="us">Contact Us</h1>
      </div>
      <Grid container spacing={5} className="contact-form-container">
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className="contact-form"
        >
          <form className="form" onSubmit={(event) => handleFormSubmit(event)}>
            <TextField
              id="outlined-basic-name"
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic-email"
              label="Your Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic-contact"
              label="Contact"
              variant="outlined"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static-message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Send Message
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className="blocks">
{/*           <img src={ContactUs} alt="contact-us" className="contact-banner" />
 */}        </Grid>
      </Grid>

      <Grid container spacing={3} className="container">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="blocks">
          <div className="photos">
            <a
              href="https://goo.gl/maps/Q6VPtC2kapBWwFXd9"
              rel="noopener noreferrer"
              target="_blank"
              className="contact-item"
            >
              <HomeRoundedIcon className="icons" />
              <h3>Address</h3>
              <p>
                Plot no 4, 101 & 102, Melinkeri Apartments S. No 149/1A, 
                Lane between Parag Rote Hospital and ITI AundhII, 
                opposite Indira School, Aundh, Pune, Maharashtra 411007
              </p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="blocks">
          <div className="photos">
            <MailOutlineRoundedIcon className="icons" />
            <h3>Email Address</h3>

            <a href="mailto:tanushree@enhansafe.com" className="contact-item">
              <p>tanushree@enhansafe.com</p>
            </a>
            <a href="mailto:sharad@enhansafe.com" className="contact-item">
              <p>sharad@enhansafe.com</p>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="blocks">
          <div className="photos">
            <PhoneRoundedIcon className="icons" />
            <h3>Contact Number</h3>
            <a href="tel://+918888827680" className="contact-item">
              <p>+91 8888827680</p>
            </a>
            <a href="tel://+919011616169" className="contact-item">
              <p>+91 9011616169</p>
            </a>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="blocks">
          <div className="photos">
            <a href="/" className="contact-item">
              <PublicRoundedIcon className="icons" />
              <h3>Website</h3>
              <p href="/contact">http://www.enhansafe.com</p>
            </a>
          </div>
        </Grid>
      </Grid>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11500.231423862417!2d73.80575695824619!3d18.559456221120218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3c605c0001%3A0xe296573b358b16b2!2sEnhansafe%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728101574845!5m2!1sen!2sin" 
        className="map"
        style={{ border:0 }}
        allowfullscreen={true}
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}
