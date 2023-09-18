import sendRequest from "./send-request";
const BASE_URL = "/api/contact";

export async function sendMail(details) {
  console.log("so far so good - contact api");
  return sendRequest(BASE_URL, "POST", details);
}

// export async function sendMail(req, res) {
//   const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.USERNAME,
//       pass: process.env.PASSWORD,
//     },
//   });

//   console.log("Transport Created", contactEmail);

//   await contactEmail.verify((error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Ready to send");
//     }
//   });

//   console.log("so far so good.");
//   const { name, email, message } = req.body;
//   const mail = {
//     from: name,
//     to: "ruirosiki@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//               <p>Email: ${email}</p>
//               <p>Message: ${message}</p>
//           `,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// }
