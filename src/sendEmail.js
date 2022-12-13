import nodemailer from "nodemailer";
import { hello } from "./templates/hello/hello.js";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    pool: true,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "", // generated ethereal password
    },
  });
  let html = await hello();
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <noreply@stck.me>', // sender address
    to: "rajat@stck.me", // list of receivers
    subject: "Hello HTML ✔", // Subject line
    text: "Hello world?", // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  

  return { status: "oks", html: html };
}

sendEmail().catch(console.error);
