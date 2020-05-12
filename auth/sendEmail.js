const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'juicingparty451@gmail.com',
        pass: 'lmtmkpqsvuxkoqem'
    }
});

function sendResetLink(email, id) {
    const mailOptions = {
        from: 'juicingparty451@gmail.com',
        to: email,
        subject: 'password reset JuicingParty',
        text: `click the link to change your password: http://localhost:3000/reset/${id}`
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email Sent');
        }
    });
}

module.exports = sendResetLink

// const AWS = require("aws-sdk");

// const config = new AWS.Config({
//     region: "us-east-1",
//     secretAccessKey: process.env.SECRET,
//     accessKeyId: process.env.KEY_ID
// });
// const ses = new AWS.SES(config);

// function sendResetLink(email, id) {
//     const params = {
//         Destination: {
//             ToAddresses: [
//                 email,
//             ]
//         },
//         Message: {
//             Body: {
//                 Text: {
//                     Charset: "UTF-8",
//                     Data: `To reset your password, please click on this link: http://localhost:3000/reset/${id}`
//                 }
//             },
//             Subject: {
//                 Charset: "UTF-8",
//                 Data: "Reset password instructions"
//             }
//         },
//         Source: "codingwithchaim@gmail.com",
//     };

//     ses.sendEmail(params, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// }

// module.exports = sendResetLink;
