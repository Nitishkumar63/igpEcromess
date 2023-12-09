import nodemailer from 'nodemailer';

const sendEmail = async () => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.SMPT_EMAIL,
                pass: process.env.SMPT_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMPT_EMAIL,
            to: 'nitishkumar22553@gmail.com',
            subject: 'for reset password',
            text: 'hello viku 34567 your otp',
        };

        // Send mail and log response
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail