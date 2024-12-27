import { useState } from "react";

import Grid from '@mui/material/Grid2';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

import orderBooksImg from "../../assets/order-books.png";

import '../../styles/home/orderBook.scss';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function OrderBook() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [isbn, setIsbn] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [zipcode, setZipcode] = useState("");
    const [message, setMessage] = useState("");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [snackBarStatus, setSnackBarStatus] = useState("");
    const [snackBarMessage, setSnackBarMessage] = useState("");
    const [snackBarAutoHideDuration, setSnackBarAutoHideDuration] =
        useState(6000);

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
            "<b>ISBN/Title: </b>" +
            isbn +
            "<br>" +
            "<b>Quantity: </b>" +
            quantity +
            "<br>" +
            "<b>Address Line 1: </b>" +
            address1 +
            "<br>" +
            "<b>Address Line 2: </b>" +
            address2 +
            "<br>" +
            "<b>Country: </b>" +
            country +
            "<br>" +
            "<b>Region: </b>" +
            region +
            "<br>" +
            "<b>Zipcode: </b>" +
            zipcode +
            "<br>" +
            "<b>Message: </b>" +
            message;

         fetch('https://us-central1-brahmdev-ai-agent.cloudfunctions.net/sendEmail', {
            method: 'POST',
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

    const onChangeCountry = (val) => {
        setCountry(val);
        if (!val) {
            setRegion('');
        }
    };

    return (
        <div className='order-book-container'>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }} className='title-container'>
                <span className='title'>Order Book</span>
                <span className='description'>
                    Please provide us the book details which you want to order.
                </span>
            </Grid>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} className='item-container'>
                </Grid>
            </Grid>

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
                {/* <h1 className="us">Contact Us</h1> */}
            </div>
            <Grid container spacing={5} className="contact-form-container">
                <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} className="contact-form">
                    <form className="form" onSubmit={(event) => handleFormSubmit(event)}>
                        <TextField
                            id="outlined-basic-name"
                            label="Name"
                            variant="outlined"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-email"
                            label="Email"
                            variant="outlined"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-contact"
                            label="Contact"
                            variant="outlined"
                            value={contact}
                            required
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-isbn"
                            label="ISBN/Title"
                            variant="outlined"
                            value={isbn}
                            required
                            onChange={(e) => setIsbn(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-quantity"
                            label="Quantity"
                            type="number"
                            variant="outlined"
                            value={quantity}
                            required
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-isbn"
                            label="Address Line 1"
                            variant="outlined"
                            value={address1}
                            required
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic-isbn"
                            label="Address Line 2"
                            variant="outlined"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        />
                        <CountryDropdown
                            value={country}
                            onChange={onChangeCountry}
                            className="custom-input"
                            required
                        />
                        <RegionDropdown
                            country={country}
                            value={region}
                            required
                            onChange={(val) => setRegion(val)}
                            className="custom-input"
                        />
                        <TextField
                            id="outlined-basic-zipcode"
                            label="Zipcode"
                            variant="outlined"
                            value={zipcode}
                            required
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                        <TextField
                            id="outlined-multiline-static-message"
                            label="Message to seller"
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
                    <img src={orderBooksImg} alt="contact-us" className="order-books-banner" />
                </Grid>
            </Grid>
        </div>
    )
}