const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '7455571393-vul2cc6bfth286n5k37vl6ijnghhp9s1.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04T_2IlqFzOYGCgYIARAAGAQSNwF-L9IrVtWHKoRI6CUi47GBBghJO52k5JpNdWjbKiRKXwDggKBYMxGkUECEogApJPKCxAFfqUA'

const oAuth2client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail(to, subject, text) {
    try {
        const accessToken = await oAuth2client.getAccessToken()

        // Create a nodemailer transporter using Gmail settings
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAUTH2',
                user: 'MyTripPlanner7@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        // Email options
        const mailOptions = {
            from: 'My Trip Planner  <MyTripPlanner7@gmail.com>',
            to,
            subject,
            text,
        };

        const result = await transport.sendMail(mailOptions)
        return result;

    } catch (error) {
        return error;
    }
}

module.exports = { sendEmail };
