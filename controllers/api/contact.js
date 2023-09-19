const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMail(req, res) {
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    // service: "iCloud",
    host: "smtp.gmail.com",
    // host: "smtp.mail.me.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  console.log("Transport Created", contactEmail);

  await contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to send");
    }
  });

  const { name, email, phone, message } = req.body;
  console.log("Received Data:", req.body);
  const mail = {
    from: name,
    to: "andrew@nibroc.dev",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
}

module.exports = {
  sendMail,
};
