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

import contactUsImg from "../assets/slider-1.jpeg";
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

    /*if (loaded) {
      window.Email.send({
        Host: process.env.REACT_APP_EMAIL_HOST,
        Username: process.env.REACT_APP_EMAIL_USERNAME,
        Password: process.env.REACT_APP_EMAIL_PASSWORD,
        To: process.env.REACT_APP_EMAIL_TO_LIST,
        From: process.env.REACT_APP_EMAIL_FROM,
        Subject: "Good Fellow Books Website visitor " + name + " needs help!",
        Body: messageData,
      }).then((message) => {
        console.log("message sent successfully!");
      });
    }
 */   
      fetch('https://us-central1-brahmdev-ai-agent.cloudfunctions.net/sendEmail', {
        method: 'POST',
        /* headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, */
        body: JSON.stringify({
          subject: "Good Fellow Books Website visitor " + name + " needs help!", 
          body: messageData,
        })
      })
        .then(response => console.log('Response ', response))
        .catch(error => console.error('ERROR ', error))   
      setSnackBarStatus("success");
      setSnackBarAutoHideDuration(10000);
      setSnackBarMessage(
        "You message sent successfully! Our representative will contact you shortly!"
      );
      setShowSnackBar(true);
      resetForm();
    
  };
  return (
    <div className="contact-us">
      <Snackbar
        open={showSnackBar}
        autoHideDuration={snackBarAutoHideDuration}
        onClose={handleClose}
      >
        <div>
          <Alert onClose={handleClose} severity={snackBarStatus}>
            {snackBarMessage}
          </Alert>
        </div>
      </Snackbar>
      <div className="container-img">
        <h1 className="us">Contact Us</h1>
      </div>
      <Grid container spacing={5} className="contact-form-container">
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} className="contact-form">
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
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className="blocks">
          <img src={contactUsImg} alt="contact-us" className="contact-banner" />
         </Grid>
      </Grid>

      <Grid container spacing={3} className="container">
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className="blocks">
          <div className="photos">
            <a
              href="https://maps.app.goo.gl/unctPvwDZWW5oNS96"
              rel="noopener noreferrer"
              target="_blank"
              className="contact-item"
            >
              <HomeRoundedIcon className="icons" />
              <h3>Address</h3>
              <p>
                Raunak city, jail Road, Adharwadi, Khadakpada, Kalyan, Maharashtra 421301, India
              </p>
            </a>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className="blocks">
          <div className="photos">
            <MailOutlineRoundedIcon className="icons" />
            <h3>Email Address</h3>

            <a href="mailto:vijay.gehlot@devarena.in" className="contact-item">
              <p>vijay.gehlot@devarena.in</p>
            </a>
            <a href="mailto:brahmdev.pandey@devarena.in" className="contact-item">
              <p>brahmdev.pandey@devarena.in</p>
            </a>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className="blocks">
          <div className="photos">
            <PhoneRoundedIcon className="icons" />
            <h3>Contact Number</h3>
            <a href="tel://+918412885352" className="contact-item">
              <p>+91 84128 85352</p>
            </a>
            <a href="tel://+46767086309" className="contact-item">
              <p>+46 767086309</p>
            </a>
          </div>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className="blocks">
          <div className="photos">
            <a href="/" className="contact-item">
              <PublicRoundedIcon className="icons" />
              <h3>Website</h3>
              <p href="/contact">http://www.devarena.in</p>
            </a>
          </div>
        </Grid>
      </Grid>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4202.939604561818!2d73.1220024!3d19.262281200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797255b6bf5b9%3A0x45539abad50f9d6c!2sDevArena%20Solutions!5e1!3m2!1sen!2sse!4v1733090068507!5m2!1sen!2sse"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}
