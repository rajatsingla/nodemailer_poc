import { sendEmail } from "./src/sendEmail.js";
import express from "express";
var app = express();

app.get("/sendemail", async (req, res, next) => {
  let response = await sendEmail();
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
