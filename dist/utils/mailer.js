const nodeMailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const transporterDetails = smtpTransport({
    host: "NiloBlog.ir",
    port: 465,
    secure: true,
    auth: {
        user: "NiloBang@gmail.com",
        pass: "123456",
    },
    tls: {
        rejectUnauthorized: false,
    },
});
exports.sendEmail = (email, fullname, subject, message) => {
    const transporter = nodeMailer.createTransport(transporterDetails);
    transporter.sendMail({
        from: "toplearn@ghorbany.dev",
        to: email,
        subject: subject,
        html: `<h1> Hello  ${fullname}</h1>
            <p>${message}</p>`,
    });
};
//# sourceMappingURL=mailer.js.map