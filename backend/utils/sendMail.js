const nodemailer = require("nodemailer");

const sendMail = async (options) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'suniverafuel@gmail.com',
            pass: 'fnyfzmbopknykicy'
        }
    });

    const mailOptions = {
        from: 'suniverafuel@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;