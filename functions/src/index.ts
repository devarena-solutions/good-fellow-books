/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as nodemailer from "nodemailer";


//google account credentials used to send email
const transporter = nodemailer.createTransport({
    host: 'radiant.herosite.pro',
    port: 465,
    secure: true,
    auth: {
        user: 'support@fellowbooks.com',
        pass: 'HDl04jp)w1%k'
    }
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const sendEmail = onRequest(async (request, response) => {
    logger.info("Hello from SendEmail! ", { structuredData: true });
    logger.info('REQUEST BODY ', request.body)
    const { subject, body } = JSON.parse(request.body);
    logger.info('SUBJECT IS ', subject);
    logger.info('BODY IS ', body)
    const mailOptions = {
        from: 'support@fellowbooks.com',
        to: 'pandey.dev25@gmail.com, support@fellowbooks.com',
        subject: subject,
        html: body
    };


    transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            console.log(error)
            return
        }
        console.log("Sent!")
    });
    response.send("Email sent!");
});
