const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = '885906088821-d4bgipt3g6md91p438p0nh17ms7gij0k.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04ur3dw1-zuqyCgYIARAAGAQSNwF-L9IrkeMaugUXn4poUMDGMERuVn-YxWuWquSWkP4QCiwc4CJwnMr9Twk1B0kyCC4HDFWykq0'

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
